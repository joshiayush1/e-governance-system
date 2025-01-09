import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    college:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "College",
        required: true
    },
    city:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true,
    },
    upiid:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        unique: true
    },
    courses: {
        type: Object,
    },
    role: {
        type: String,
    }
})

const adminModel = mongoose.model("Admin", adminSchema);

export default adminModel