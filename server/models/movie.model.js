import { Schema, model } from "mongoose";

const MovieSchema = new Schema({
  title: {
    type:String,
    required:true
},
  description:{ 
    type:String,
    required:true
},
  thumbnail: {
    type:String,
    required:true
},
  bannerImage: {
    type:String,
    required:true
},
  trailerVideo: {
    type:String,
    required:true
    },
  rating: Number,
  casts: [{ name: String, image: String }],
  duration: Number,
  genre: {
    type: String,
    required:true,
    enum: ["Thriller","Action", "Comedy", "Drama", "Fantasy"],
  },
  releaseDate:{
    type: Date,
    required:true
  },
  language: [{
    type: String,
    enum: ["English", "Hindi", "Telugu"]
  }],

  theatre:{
    type:Schema.Types.ObjectId,
    ref: 'theatre',
    required: true
  }
});

const Movie = new model("movie", MovieSchema);

export default Movie;



// {
//   "title": "SpiderMan",
//   "description": "A high-octane action thriller that outlines the emotional journey of a man who is set to rectify the wrongs in society",
//   "thumbnail": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jawan-et00330424-1693892482.jpg",
//   "bannerImage": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/jawan-et00330424-1693892482.jpg",
//   "trailerVideo": "https://www.youtube.com/embed/8ZRaZzoJvUU?enablejsapi=1&modestbranding=1&origin=https%3A%2F%2Fin.bookmyshow.com&playsinline=1&mute=1&fs=1&widgetid=3",
//   "rating": 8.4,
//   "genre": "Thriller",
//    "releaseDate": "7 Sep, 2023",
//    "language": ["English", "Hindi", "Telugu"]
  
// }
