// Requirements
const mongoose = require("mongoose");

// Book Schema
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, unique: true }, // ISBN must be unique across collection
  publishedDate: Date,
  inStock: { type: Boolean, default: true },
});

// Compile Schema into model - mongoose maps to 'books' collection automatically
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
