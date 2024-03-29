import express from "express";
import { addVideo, addView, deleteVideo, getByTag, getVideo, random, search, sub, trend, updateVideo } from "../controllers/video.js";
import { verifyToken } from '../verifyToken.js'

const router = express.Router();

// create a video
router.post("/", verifyToken, addVideo);

// update a video
router.put("/:id", verifyToken, updateVideo);

// delete a video
router.delete("/:id", verifyToken, deleteVideo);

// get a video
router.get("/find/:id", getVideo);

// add view to a video
router.put("/view/:id", addView);

// get trending videos
router.get("/trend", trend);

// get random video for home section
router.get("/random", random);

// get videos from subscribed channels
router.get("/sub", verifyToken, sub);

// get videos by tag
router.get("/tags", getByTag);

// get videos from search result
router.get("/search", search);

export default router;