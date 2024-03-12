// import { Schema, model } from "mongoose";

// const ShowSchema = new Schema({
//   datetime: {
//     type: Date,
//     required: true,
//   },
//   language: String,
//   movie: {
//     type: Schema.Types.ObjectId,
//     ref: "movie",
//     required: true,
//   },
//   theatre: {
//     type: Schema.Types.ObjectId,
//     ref: "theatre",
//     required: true,
//   },
//   totalSeats: {
//     type: Number,
//   },
//   availableSeats: {
//     type: Number,
//   },
//   seats: [{
//     category: String,
//     price: Number,
//     arrangements: [[
//       {
//         seatNumber: String,
//         status: String,
//       }
//     ]]
//   }]
// });

// const Show = model('show', ShowSchema);  
// export default Show;  // Export the model


import { Schema, model } from "mongoose";

const ShowSchema = new Schema({
    datetime: {
        type: Date,
        required: true,
    },
    language:  String,
    movie: {
        type: Schema.Types.ObjectId,
        ref: 'movie',
        required: true,
    },
    theatre: {
        type: Schema.Types.ObjectId,
        ref: 'theatre',
        required: true,
    },  
    totalSeats: {
        type: Number,
    },
    availableSeats: {
        type: Number,
    },
    seats: [
        {
            category: String,
            price: Number,
            arrangements: [[
                {
                    seatNumber: String,
                    status: String
                }
            ]]
        }
    ]
})

const Show = new model('show', ShowSchema);

export default Show;



// {
//   "datetime": "2024-03-14T00:00:00.000+00:00",
//   "language": "Hindi",
//   "movie": "65e701a4bf9f96b985643333",
//   "theatre": "65e701a4bf9f96b985643331",
//   "totalSeats": 6,
//   "availableSeats": 6,
//   "seats": [
//     {
//       "category": "Gold",
//       "price": 500,
//       "arrangements": [[
//           {
//             "seatNumber": "1A",
//             "status": "AVAILABLE"
//           },
//           {
//             "seatNumber": "2A",
//             "status": "AVAILABLE"
//           },
//           {
//             "seatNumber": "3A",
//             "status": "AVAILABLE"
//           }
//         ]]
//     }
// ,
//     {
//       "category": "Silver",
//       "price": 300,
//       "arrangements": [
//         [
//           {
//             "seatNumber": "1B",
//             "status": "AVAILABLE"
//           },
//           {
//             "seatNumber": "2B",
//             "status": "AVAILABLE"
//           },
//           {
//             "seatNumber": "3B",
//             "status": "AVAILABLE"
//           }
//         ]]
//     }
//   ]
// }
