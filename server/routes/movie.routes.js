import { Router } from "express";
import { createMovie,getMovies } from "../controllers/movie.controller.js";
import isLoggedIn from "../middlewares/authentication.js";
import authorizedRoles from "../middlewares/authorization.js";

const router = Router();

//create a movie and list a movie
router.post('/',isLoggedIn, authorizedRoles('Admin'),createMovie);
router.get('/list',getMovies);


export default router;