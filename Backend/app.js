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
import session from 'express-session';
import passport from 'passport';
import authRoute from './src/routes/authRoute.js';
// import applicationRouter from './src/routes/applicationRoute.js';

connectDB()

const app = express();
const port = process.env.PORT || 8080;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

// session and passport (used for OAuth flows)
app.use(
    session({
        secret: process.env.SESSION_SECRET || 'keyboardcat',
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());

// JSON parse error handler
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ success: false, message: 'Invalid JSON payload. Check your request body formatting.' });
    }
    next(err);
});

//API end-points
app.use('/user', userRoute)
app.use('/auth', authRoute)
app.use("/api/blogs", blogRouter);
// app.use("/api/applications", applicationRouter);
app.use("/api/universities", universityRouter);
app.use("/api/students", studentRouter);
app.use("/api/institutes", instituteRouter);


// route
app.get("/", (req, res) => {
    res.send("Welcome to Unefly!");
});

app.listen(port, () => {
    console.log(`sever is listening at port ${port}`);
})