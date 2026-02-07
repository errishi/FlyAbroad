import dotenv from 'dotenv'
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './src/config/MongoDB.js';
import blogRouter from './src/routes/blogRoute.js';
// import applicationRouter from './src/routes/applicationRoute.js';

connectDB();

const app = express();
const port = process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());

//API end-points
app.use("/api/blogs", blogRouter);
// app.use("/api/applications", applicationRouter);

// route
app.get("/", (req, res) => {
    res.send("Welcome to Unefly!");
});

app.listen(port, ()=>{
    console.log(`sever live at ${port}`);
})