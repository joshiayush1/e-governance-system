import express from "express"
import cors from "cors"
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"

import studentRouter from "./routes/studentRoute.js"
import adminRouter from "./routes/adminRoute.js"
import collegeRoute from "./routes/collegeRoute.js"
import dotenv from "dotenv"
dotenv.config()

import collegeModel from "./models/collegeModel.js"

//app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())
app.use("/student", studentRouter)
app.use("/admin", adminRouter)
app.use("/api", collegeRoute)

// api endpoint
app.get("/", (req, res)=>{
    res.send("API working");
})

app.get('/api/collaborated-colleges', async (req, res) => {
  try {
    const colleges = await collegeModel.find(); 
    console.log(colleges);
    
    res.json(colleges); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
});

export default app;


app.listen(port, () => {
    console.log(`Server running on ${port}`);
})