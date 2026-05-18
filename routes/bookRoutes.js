// Requirements
const express = require("express");
const router = expresss.Router();
const Book = require("../models/Book");

// Create - POST
router.post("/", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
