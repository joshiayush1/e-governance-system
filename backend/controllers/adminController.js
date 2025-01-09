import adminModel from "../models/adminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import collegeModel from "../models/collegeModel.js"

function generateRandomUsername(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let username = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        username += characters[randomIndex];
    }
    return username;
}

export const loginAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await adminModel.findOne({ username });

        if (!admin) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid password" });
        }

        const token = createToken(admin._id);
        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
                role: admin.role,
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

export const registerAdmin = async (req, res) => {
    try {
        const { name, email, college, city, rollno, address, upiid, password } = req.body;

        const existingAdmin = await adminModel.findOne({ $or: [{ email }, { username: email }] });

        if (existingAdmin) {
            return res.status(400).json({ success: false, message: "Admin already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        let collegeData = await collegeModel.findOne({ name: college, city });
        if (!collegeData) {
            collegeData = new collegeModel({
                name: college,
                city,
                address,
                admins: [] 
            });
            await collegeData.save();
        }

        const newAdmin = new adminModel({
            name, 
            email, 
            college: collegeData._id, 
            city,
            address,
            upiid, 
            password: hashedPassword,
            username: generateRandomUsername(),
            role: "Admin",
        });

        const admin = await newAdmin.save();

        collegeData.admins.push(admin._id);
        await collegeData.save();

        const token = createToken(admin._id);

        res.status(201).json({
            success: true,
            token,
            admin: {
                id: admin._id,
                name: admin.name,       
            }
        });
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};



export default {loginAdmin, registerAdmin};