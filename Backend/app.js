import express from 'express';
import cors from 'cors';

const app = express();
const port = 8080 || process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());


// route
app.get("/", (req, res) => {
    res.send("Welcome to Unefly!");
});

app.listen(port, ()=>{
    console.log(`sever live at ${port}`);
})