const mongoose = require("mongoose");
const books = require("./data.js");
const Book = require("../models/books.js")

mongoose.connect("mongodb://localhost:27017/bookstore").then(()=>{
  console.log("Connected to MongoDB");
}).catch((err)=>{
  console.error("Error connecting to MongoDB", err);
})

const initDatabase = async()=>{
    await Book.deleteMany({});
    await  Book.insertMany(books.data);
    console.log("Database initialized with books");
}



initDatabase();