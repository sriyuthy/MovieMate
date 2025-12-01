import express from "express"
import { getMovieDetails } from "../controllers/movieController.js"

const router = express.Router();

router.get("/:title", getMovieDetails);

export default router;