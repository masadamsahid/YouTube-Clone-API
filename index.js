import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import commentRoutes from './routes/comments.js';
import userRoutes from './routes/users.js';
import videoRoutes from './routes/videos.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

const connect = () => {
  mongoose.connect(process.env.MONGODB).then(()=>{
    console.log("Connected to MongoDB");
  }).catch((err) => {
    throw err;
  });
}

// Allow to use cookies
app.use(cookieParser());

// Allow express app to take any JSON file from outside
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  })
});

app.listen(8800, ()=>{
  connect();
  console.log("Connected to server!");
});