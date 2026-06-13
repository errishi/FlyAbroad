import dotenv from 'dotenv'
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './src/config/MongoDB.js';
import blogRouter from './src/routes/blogRoute.js';
import blogModel from './src/models/blogModel.js';
import userRoute from "./src/routes/userRoute.js"
import fs from 'fs';
import universityRouter from './src/routes/universityRoute.js';
import studentRouter from './src/routes/studentRoute.js';
import instituteRouter from './src/routes/instituteRoute.js';
// import applicationRouter from './src/routes/applicationRoute.js';

connectDB();

const app = express();
const port = process.env.PORT;

// middleware
app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

//API end-points
app.use('/user', userRoute)
app.use("/api/blogs", blogRouter);
// app.use("/api/applications", applicationRouter);
app.use("/api/universities", universityRouter);
app.use("/api/students", studentRouter);
app.use("/api/institutes", instituteRouter);

// route
app.get("/", (req, res) => {
    res.send("Welcome to Unefly!");
});

app.listen(port, ()=>{
    console.log(`sever live at ${port}`);
})