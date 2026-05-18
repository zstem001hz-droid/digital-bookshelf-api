# Digital Bookshelf API

A RESTful API for managing a library's book inventory, built with Node.js, Express, and MongoDB.

---

## Tech Stack
- Node.js
- Express
- MongoDB
- Mongoose
- dotenv

---

## Project Structure

digital-bookshelf-api/
├── db/
│   └── connection.js
├── models/
│   └── Book.js
├── routes/
│   └── bookRoutes.js
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── server.js

---

## Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas account

### Installation
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file using `.env.example` as a template
4. Add your MongoDB Atlas connection string as `MONGO_URI`
5. Run `nodemon server.js`

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| MONGO_URI | MongoDB Atlas connection string |
| PORT | Port number (default: 3001) |

---

> 🚧 Work in progress