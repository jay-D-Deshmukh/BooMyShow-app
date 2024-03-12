import  express from "express";
import UserRoutes from './routes/user.routes.js';
import { config } from "dotenv";//to run the .env file
import connectToDatabase from "./config/dbConfig.js";
import cookieParser from "cookie-parser";
import MovieRoutes  from './routes/movie.routes.js';
import ShowRoutes from './routes/show.routes.js';
import cors from 'cors';
config();

const app = express();

app.use(cors());
app.use(express.json()); //middleware to parse json
app.use(cookieParser());

app.use('/api/user',UserRoutes);
app.use('/api/movie',MovieRoutes);
app.use('/api/show',ShowRoutes);

app.use('*',(req,res)=>{
    res.status(404).send("Not Found");
});

app.listen(3001,async()=>{
    await connectToDatabase();
    console.log("Server is running on port: http://localhost:3001")
})