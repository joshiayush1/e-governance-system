import mongoose from "mongoose";

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
        min: [1, 'Semester must be at least 1'],
        max: [8, 'Semester cannot be more than 8']
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String
    },
    feesPaid:{
        type: Boolean
    }
})

const studentModel = mongoose.model('Student', studentSchema)

export default studentModel