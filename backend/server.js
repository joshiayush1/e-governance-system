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
import Student from "./models/studentModel.js"

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



import paymentRoute from "./routes/paymentRoute.js"
app.use("/payment", paymentRoute);

app.put("/update-payment-status", async (req, res) => {
  const { email, feesPaid } = req.body;

  if (!email || feesPaid === undefined) {
    return res.status(400).json({ success: false, message: "Missing required fields." });
  }

  console.log(`Received update payment request: email = ${email}, feesPaid = ${feesPaid}`);

  try {
    const student = await Student.findOneAndUpdate(
      { email: email },
      { feesPaid: feesPaid },
      { new: true }
    );

    if (!student) {
      console.log("Student not found with the provided email:", email);
      return res.status(404).json({ success: false, message: "Student not found." });
    }

    console.log("Payment status updated successfully for student:", student);

    return res.status(200).json({
      success: true,
      message: "Payment status updated successfully.",
      student: {
        feesPaid: student.feesPaid,
      },
    });
  } catch (error) {
    console.error("Error updating payment status:", error);
    return res.status(500).json({ success: false, message: "Internal server error." });
  }
});



app.get('/all-students-data', async (req, res) => {
  try {
    const students = await Student.find(); 
    res.json({ success: true, students }); 
  } catch (error) {
    console.error('Error fetching students data:', error);
    res.status(500).json({ success: false, message: 'Error fetching students data' });
  }
});



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


import Feedback from "./models/feedbackModel.js";

app.post('/feedback', async (req, res) => {
  const { thoughts, email } = req.body;

  if (!thoughts || !email) {
    return res.status(400).json({ message: "Thoughts and email are required!" });
  }

  try {
    const feedback = new Feedback({
      email: email,
      thoughts: thoughts,
    });

    await feedback.save();

    res.status(200).json({ message: "Feedback submitted successfully!", feedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
});




export default app;


app.listen(port, () => {
    console.log(`Server running on ${port}`);
})