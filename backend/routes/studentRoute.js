import express from 'express';
import {getStudentByEmail, loginStudent, registerStudent} from '../controllers/studentController.js';

const router = express.Router();

router.post('/student-login', loginStudent);
router.post('/student-register', registerStudent);
router.get('/student-email/:email', getStudentByEmail);

export default router;