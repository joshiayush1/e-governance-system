import studentModel from "./studentModel";

const feeSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  semester: { type: Number, required: true },
  amountPaid: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
  paymentMode: { type: String, required: true },
  status: { type: String, enum: ["Paid", "Pending"], default: "Pending" },
});

const StudentFeesModel = mongoose.model("Fee", feeSchema);

export default studentFeesModel