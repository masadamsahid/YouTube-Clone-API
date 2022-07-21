import express from "express";
import { 
  deleteUser, 
  dislike, 
  getUser,
  like,
  subscribe,
  unsubscribe,
  update
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// update user
router.put("/:id", verifyToken, update);

// delete user
router.delete("/:id",verifyToken, deleteUser);

// get a user
router.get("/find/:id", getUser);

// subscribe user
router.put("/sub/:id",verifyToken, subscribe);

// unsubscribe user
router.put("/unsub/:id",verifyToken, unsubscribe);

// like video
router.put("like/:videoId",verifyToken, like);

// dislike video
router.put("dislike/:videoId",verifyToken, dislike);

export default router;