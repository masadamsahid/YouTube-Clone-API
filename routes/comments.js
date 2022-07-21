import express from "express";
import { addComment, deleteComment, getComments } from "../controllers/comment.js";
import { verifyToken } from '../verifyToken.js'

const router = express.Router();

// Add a comment to a video
router.post("/", verifyToken, addComment);

// Delete a comment from a video
router.delete("/:id", verifyToken, deleteComment);

// Get comments from a video
router.get("/:videoId", getComments);

export default router;