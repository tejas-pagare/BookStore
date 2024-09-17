const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const books = Schema({
  title: String,
  author: String,
  description: String,
  bookCount: Number,
  image: String,
  price: Number,
  available: Boolean
});

const Book = mongoose.model("Book", books);
module.exports=Book;