import mongoose from "mongoose"

const feedbackSchema = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    thoughts:{
        type: String,
        required: true
    }
})

const feedbackModel = mongoose.model("Feedback", feedbackSchema)

export default feedbackModel