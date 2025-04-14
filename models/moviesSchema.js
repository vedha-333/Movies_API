import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  rating: { type: Number , required : true , min : 0 , max : 10},
  releaseYear: { type: Number, required: true },
});

const movies = mongoose.model("movie", moviesSchema);
export default movies;