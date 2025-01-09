import express from "express";
import { getAllColleges } from "../controllers/collegeController.js";

const router = express.Router();

router.get("/colleges", getAllColleges);

export default router;
