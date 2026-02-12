import express from 'express';
import 'dotenv/config'
import connectDB from "./src/config/MongoDB.js"
import userRoute from "./src/routes/userRoute.js"

const app = express();
const PORT =process.env.PORT || 3000;

app.use(express.json())

app.use('/user', userRoute)

// http://localhost:8080/user/register



app.listen(PORT,()=>{
    connectDB()
console.log(`Server is running on port ${PORT}`);
})
