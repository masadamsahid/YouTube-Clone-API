import express from "express";
import {googleAuth, signin, signout, signup} from "../controllers/auth.js";

const router = express.Router();

// CREATE A USER
router.post("/signup", signup);

// SIGN IN
router.post("/signin", signin);

// GOOGLE AUTH
router.post("/google", googleAuth);

// SIGN OUT
router.put("/signout", signout);

export default router;