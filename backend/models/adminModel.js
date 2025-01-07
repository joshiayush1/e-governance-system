import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    institution:{
        type: String,
        required: true
    },
    cityname:{
        type: String,
        required: true
    },
    identificationdoc:{
        type: String,
        required: true,
    },
    upiid:{
        type: String,
        required: true,
        unique: true
    },
    createpassword:{
        type: String,
        required: true,
    },
    confirmpassword:{
        type: String,
        required: true,
    }
})