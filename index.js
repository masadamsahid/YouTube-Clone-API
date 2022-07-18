import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const connect = () => {
  mongoose.connect(process.env.MONGODB).then(()=>{
    console.log("Connected to MongoDB");
  }).catch((err) => {
    throw err;
  });
}

app.listen(8800, ()=>{
  connect();
  console.log("Connected to server!");
});