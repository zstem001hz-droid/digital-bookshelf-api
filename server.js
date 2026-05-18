// Requirements
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
require("./db/connection");
const bookRoutes = require("./routes/bookRoutes");

// App Configuration
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware

// Routes

// Error Handling

// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
