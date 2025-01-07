import mongoose, { modelNames } from "mongoose";

const studentSchema = new mongoose.Schema({
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
        type: String,
        required: true
    },
    course:{
        type: String,
        required: true
    },
    rollno:{
        type: String,
        required: true,
    },
    semester:{
        type: Number,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
})

const studentModel = mongoose.model('Student', studentSchema)

export default studentModel