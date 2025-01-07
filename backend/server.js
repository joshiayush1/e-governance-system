import express from "express"
import cors from "cors"
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
// import studentFeesModel from "./models/studentFeesModel.js"

import studentRouter from "./routes/studentRoute.js"
import dotenv from "dotenv"
dotenv.config()

//app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())
app.use("/student", studentRouter)

// api endpoint
app.get("/", (req, res)=>{
    res.send("API working");
})

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})