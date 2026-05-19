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

```
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
```

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

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/books | Create a new book |
| GET | /api/books | Retrieve all books |
| GET | /api/books/:id | Retrieve a single book by ID |
| PUT | /api/books/:id | Update a book by ID |
| DELETE | /api/books/:id | Delete a book by ID |

---

## Usage Examples

### Create a Book
```http
POST /api/books
Content-Type: application/json

{
  "title": "To Kill a Mockingbird",
  "author": "Harper Lee",
  "isbn": "9780061935466",
  "publishedDate": "1960-07-11",
  "inStock": true
}
```

### Get All Books
```http
GET /api/books
```

### Get a Single Book
```http
GET /api/books/:id
```

### Update a Book
```http
PUT /api/books/:id
Content-Type: application/json

{
  "title": "Updated Title"
}
```

### Delete a Book
```http
DELETE /api/books/:id
```

---

## Testing

All endpoints can be tested using [Postman](https://www.postman.com). Import the collection and set the base URL to `http://localhost:3001`.

---

---

## Reflection

**1. Why is it beneficial to separate your routes, models, and database connection into different directories?**

Separating concerns into distinct directories makes the codebase easier to read, maintain, and scale. Each file has a single responsibility — `connection.js` handles the database, `Book.js` defines the data structure, and `bookRoutes.js` handles the API logic. This modularity means changes to one area don't risk breaking another, and new team members can navigate the project structure intuitively.

**2. What is the difference between `PUT` and `PATCH` HTTP methods, and which one does your `PUT /:id` endpoint more closely resemble?**

`PUT` replaces an entire resource with new data, while `PATCH` applies a partial update to specific fields only. Despite using the `PUT` method, this endpoint more closely resembles `PATCH` behavior — it only updates the fields provided in `req.body` rather than replacing the entire document. This is because `findByIdAndUpdate` in Mongoose applies partial updates by default.

**3. In the `DELETE` route, what is a good practice for the response you send back after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?**

A simple success message is generally the best practice — once a resource is deleted it no longer exists, so returning it could be misleading. A clear confirmation message like `{ message: "Book successfully deleted" }` tells the client the operation succeeded without implying the resource still exists. Some APIs return a `204 No Content` status with no body, which is also a widely accepted convention for DELETE responses.