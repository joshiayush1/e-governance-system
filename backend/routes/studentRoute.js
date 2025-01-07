import express from 'express';
import {loginStudent, registerStudent} from '../controllers/studentController.js';

const router = express.Router();

router.post('/student-login', loginStudent);
router.post('/student-register', registerStudent);

export default router;