# 🎬 Movies API

A simple RESTful API to manage movies using **Node.js**, **Express**, and **MongoDB (Mongoose)**.

---

## 🚀 Features

- Add a new movie
- Get all movies
- Get a movie by ID
- Update movie rating by ID
- Delete a movie by ID

---

## ⚙️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/movies-api.git
   cd movies-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file**
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/moviesdb
   ```

4. **Run the server**
   ```bash
   npm start
   ```

---

## 📦 API Endpoints

### 1. Create a Movie
```http
POST /movies
```
**Body:**
```json
{
  "title": "Inception",
  "genre": "Sci-Fi",
  "rating": 9,
  "releaseYear": 2010
}
```

---

### 2. Get All Movies
```http
GET /movies
```

---

### 3. Get a Movie by ID
```http
GET /movies/:id
```

---

### 4. Update Movie Rating by ID
```http
PUT /movies/:id/rating
```
**Body:**
```json
{
  "rating": 8.5
}
```

---

### 5. Delete a Movie by ID
```http
DELETE /movies/:id
```

---

## ✅ Example Movie Schema

```js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 10 },
  releaseYear: { type: Number, required: true }
});

module.exports = mongoose.model('Movie', movieSchema);
```

---

## 🧪 Testing

Use [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test all endpoints.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 💡 Future Features

- Search movies by title or genre
- Pagination
- Authentication (JWT)