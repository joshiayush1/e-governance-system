import collegeModel from "../models/collegeModel.js";

export const getAllColleges = async (req, res) => {
  try {
    const colleges = await collegeModel.find();
    res.status(200).json(colleges);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch colleges", error });
  }
};
