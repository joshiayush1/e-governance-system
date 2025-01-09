import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema({
    admins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
    }],
    name: {
        type: String,
        required: true,
    },
});

const collegeModel = mongoose.model('College', collegeSchema);
export default collegeModel;
