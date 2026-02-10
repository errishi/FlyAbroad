import dotenv from 'dotenv'
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './src/config/MongoDB.js';
import blogRouter from './src/routes/blogRoute.js';
import blogModel from './src/models/blogModel.js';
import fs from 'fs';
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

// read json file data
// const blogs = JSON.parse(fs.readFileSync("./blogdata.json", "utf-8"));

// const importData = async () => {
//     try {
//         await blogModel.deleteMany();

//         // insert data
//         await blogModel.insertMany(blogs);
//         console.log("data inserted");
//     } catch (error) {
//         console.error(`${error}`);
//     }
// }

// importData();

app.listen(port, ()=>{
    console.log(`sever live at ${port}`);
})