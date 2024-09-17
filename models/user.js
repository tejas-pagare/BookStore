const mongoose = require("mongoose");
const { type } = require("os");

const Schema = mongoose.Schema;


const userSchema = Schema({
  username: { type: String, required: true, },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: String,
  cart:{
    items: [
      {
        book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
        quantity: {
          type: Number,
          default: 0
        }
      }
    ]
  },
  // orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  // role: { type: String, enum: ["user", "admin"], default: "user" }
})

const User = mongoose.model("User", userSchema);
module.exports = User;