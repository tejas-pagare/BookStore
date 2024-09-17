const express = require('express');
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const Book = require("./models/books.js");
const User = require("./models/user.js");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var session = require('express-session')
const flash = require("connect-flash");

const mongoose = require("mongoose");
//const User = require('./models/user.js');


mongoose.connect("mongodb://localhost:27017/bookstore").then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB", err);
})




const sessionOption = {
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,//from todays to next 7 days
    maxAge: 1000 * 60 * 60 * 24 * 7,
  }
}

app.use(session(sessionOption));
app.use(flash());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.engine('ejs', ejsMate);

const isLoggedIn = (req, res, next) => {
  if (req.cookies.token) {
    jwt.verify(req.cookies.token, "shhhhhhhhhh", (err, user) => {
      if (err) return res.redirect("/login");
      req.user = user;
      // res.locals.currUser = user;
      //  console.log(res.locals.currUser);
      next();
    })
  } else {
    req.flash("error", "You Must Login")
    return res.redirect("/login");
  }
}
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  //console.log(res.locals.currUser);
  //  console.log(req.user)
  res.locals.currUser = req.user;
  next();//Don't forget to call this
});




app.get("/", isLoggedIn, (req, res) => {
  res.render("books/home.ejs");
})

app.get("/signup", (req, res) => {

  res.render("books/signup.ejs")
})

app.post("/signup", async (req, res) => {
  const { username, email, password, image } = req.body;
  console.log(image);
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      const newUser = await User.create({
        username,
        email,
        password: hash,
        image
      });


      let token = jwt.sign({ email }, "shhhhhhhhhh");
      //  req.users = email;
      res.cookie("token", token);
      req.flash("success", "Welcome to MyBook");
      res.redirect("/books");
    });
  })

});

app.get("/login", (req, res) => {
  res.render("books/login.ejs");

});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const user = await User.findOne({ email });

  if (!user) {
    let err_msg = "User don't Exists";
    let status = 401;
    return res.status(401).render("error.ejs", { err_msg, status });

  } else {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      let token = jwt.sign({ email }, "shhhhhhhhhh");
      res.cookie("token", token);
      req.flash("success", "Welcome Back");
      res.redirect("/books");
    } else {
      let err_msg = "Invalid email or password";
      let status = 401;
      return res.status(401).render("error.ejs", { err_msg, status });
    }
  }



})

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  req.flash("success", "You are Logged Out");
  res.redirect("/login");
});

app.get("/profile", isLoggedIn, async (req, res) => {
  const { email } = req.user;
  const currUser = await User.find({ email }).populate({
    path: 'cart.items.book',
    model: 'Book'
  });
  console.log(currUser);
  //  res.send("profile");
  const cartBook = currUser[0].cart.items;
  res.render("books/Profile.ejs", { user: currUser[0], cartBook });
})

app.get("/books", isLoggedIn, async (req, res) => {
  const books = await Book.find({});
  //console.log(books);
  res.render("books/index.ejs", { books });
})

app.get("/show", isLoggedIn, (req, res) => {
  res.render("books/show.ejs");
})

app.get("/show/:id", async (req, res) => {
  let { id } = req.params;
  const book = await Book.findById(id);
  // console.log(book);
  res.render("books/show.ejs", { book });
})

app.post("/cart/:id", async (req, res) => {
  let { id } = req.params;
  const book = await Book.findById(id);
  //  console.log(res.locals.currUser);
  //console.log(res.user);
  jwt.verify(req.cookies.token, "shhhhhhhhhh", async (err, user) => {
    if (err) return res.redirect("/login");
    // req.user = user;
    // console.log(user);
    const email = user.email;
    //  console.log(res.locals.currUser);
    const currUser = await User.find({ email }).populate({
      path: 'cart.items.book',
      model: 'Book'
    });
    const FoundUser = currUser[0];
    if (!FoundUser) return res.redirect("/login");


    let isPresent = false;
    currUser[0].cart.items.forEach(async (item) => {
      if (item.book._id.toString() === book._id.toString()) {
        isPresent = true;
        // console.log(item.quantity);
        item.quantity += 1;

        return;
      }
    });
    console.log(isPresent);
    if (!isPresent) {
      const quantity = 1;
      FoundUser.cart.items.push({ book, quantity });

    }
    await FoundUser.save();
    //  console.log(FoundUser);
    //console.log(book);
    req.flash("success", `Added ${book.title} to your cart`);
    res.redirect("/books");

  })
})

app.get("*", (req, res) => {
  res.status(404).render("error.ejs", { err_msg: "Page Not Found", status: 404 });

})

app.listen(8000, () => {
  console.log('Server is running on port 8000');
})