import studentModel from "../models/studentModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const loginStudent = async (req, res) => {
    try {
        const { email, password } = req.body;
        const student = await studentModel.findOne({ email });

        if (!student) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid password" });
        }

        const token = createToken(student._id);
        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            student: {
                id: student._id,
                name: student.name,
            }
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

export const registerStudent = async (req, res) => {
    try {
        const { name, email, college, course, rollno, semester, password, confirmpassword } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new studentModel({
            name, 
            email, 
            college, 
            course, 
            rollno, 
            semester, 
            password: hashedPassword,
        });

        const student = await newUser.save();
        console.log(student);

        const token = createToken(student._id);
        res.status(201).json({
            success: true,
            token,
            student: {
                id: student._id,
                name: student.name,
            }
        });
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export default {loginStudent, registerStudent};