import mongoose from "mongoose";
import express from "express";
import "dotenv/config";
import Movies from "./models/moviesSchema.js";

const app = express();
const PORT = 4000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected "))
  .catch((error) => console.log("MongoDB failed to connect ", error));

app.post('movies/:id/rating', async(req,res)=>{
  const {id} = req.params
  const {rating} = req.body

  if (rating < 0 || rating > 10 ){
    return res.status(400).json({message : "Rating must be between 0 to 10 "})
  }

  try {
    const updateMovies = await Movies.findByIdAndUpdate(id , {rating},{
      new : true , runValidators : true
    })
    if (!updateMovies){
      return res.status(404).json({message : "Movies not found. "})
    }
    res.status(200).json(updateMovies)
  } catch (err){
    res.status(500).json({message: `Server is running on ${PORT}`})
  }
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
