import mongoose from "mongoose";
import Show from "../models/show.model.js"

export const createShow = async(req, res) => {
    const showDetails = req.body;

    const response = await Show.create(showDetails);
    res.status(200).send(response);
}


export const showDetail = async(req, res) => {
    const response = await Show.findById(req.params.showId);
    res.status(200).send(response);
}

// export const listShows = async(req, res) => {
//     const movieId = req.query.movie;//most of filter related stuff  is done by req.query not in params, bcoz params is used in straight forward manner like constant ID
//     const response = await Show.find({movie:movieId});
//     res.status(200).send(response);

// }


export const listShows = async (req, res) => {
    const movieId = req.query.movie;
    const movieDate = req.query.date;
    const response = await Show.aggregate([
        {
            $match: { movie: new mongoose.Types.ObjectId(movieId) },
        },
        {
            $match: {  datetime: { 
                '$gte': new Date(`${movieDate}T00:00:00.000+00:00`), 
                '$lt': new Date(`${movieDate}T23:59:59.999+00:00`), 
            } },
        }
        , {
            $group : { _id : "$theatre", shows: { $push: "$$ROOT" } }        
        }
    ]).exec();
    res.status(200).send(response);
}


// export const listShows = async (req, res) => {
//   const movieId = req.query.movie; // most of the filter-related stuff is done by req.query, not in params, because params are used in a straightforward manner like constant ID
//   const movieDate = req.query.date || new Date();
//   try {
//     const response = await Show.aggregate([
//       {
//         $match: { movie: mongoose.Types.ObjectId(movieId), dateTime: movieDate },
//       },
//       {
//         $group: { _id: '$theatre', shows: { $push: '$$ROOT' } },
//       },
//     ]).exec();
//     res.status(200).send(response);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: 'Internal Server Error' });
//   }
// };
