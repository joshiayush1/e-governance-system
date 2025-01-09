import React, { useEffect, useState } from 'react';
import backbtn from "../assets/caret-left-solid.svg";
import axios from "axios";
import { toast } from "react-hot-toast";
import courses from "../../public/javascripts/courses.js";

const StudentRegister = () => {
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        college: '',
        course: '',
        rollno: '',
        semester: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        const fetchColleges = async () => {
            try {
                const response = await fetch('http://localhost:4001/api/collaborated-colleges');
                if (!response.ok) {
                    throw new Error('Failed to fetch colleges');
                }
                const data = await response.json();
                setColleges(data); 
                setLoading(false); 
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchColleges();
    }, []); 

    if (loading) {
        return <div>Loading colleges...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.id]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }
        if (formData.semester > 8) {
            toast.error("Semester number cannot be greater than 8!");
        }
        try {
            const response = await axios.post("http://localhost:4001/student/student-register", formData);
            toast.success("Registration Success");

            localStorage.setItem('email', response.data.student.email);
            localStorage.setItem('role', response.data.student.role);

            window.location.href = '/';
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong!");
        }
    };

    return (
        <div className='min-h-screen max-w-screen overflow-x-hidden flex flex-col justify-center items-center bg-slate-50'>
            <a href="" className="absolute top-0 left-0 mr-5 md:ml-10 mt-10">
                <h1 className="font-extrabold text-3xl cursor-pointer text-teal-500">
                ePAY
                </h1>
                <p className="font-extrabold text-[10px] cursor-pointer text-amber-500">
                PAY YOUR FEES
                </p>
         </a>
            <div className='h-full w-screen flex flex-col lg:flex-row mt-40 lg:mt-40'>
                <div className='h-full lg:h-full w-full lg:w-1/2 flex justify-center items-center'>
                    <div className='w-full lg:w-[450px] min-h-[500px] px-5 py-2 lg:px-10 lg:py-10'>
                        <h1 className='mb-5 font-semibold'>Instructions for Students:</h1>

                        <p className='text-sm text-slate-700 mb-3'>- Enter your correct details while Logging In.</p>
                        <p className='text-sm text-slate-700 mb-3'>- Enter your full name in the format: Surname Yourname Fathername.</p>
                        <p className='text-sm text-slate-700 mb-3'>- Enter your email address.</p>
                        <p className='text-sm text-slate-700 mb-3'>- Enter your registered email address in the first field.</p>
                        <p className='text-sm text-slate-700 mb-3'>- Select your college from the list.</p>
                        <p className='text-sm text-slate-700 mb-3'>- Select your course from the available options.</p>
                        <p className='text-sm text-slate-700 mb-3'>- Enter your unique roll number as assigned by your institution.</p>
                        <p className='text-sm text-slate-700 mb-3'>- Enter a secure password for your account.</p>
                        <p className='text-sm text-slate-700 mb-3'>- Re-enter the same password to confirm..</p>
                        <p className='text-sm text-slate-700 mb-5'>- After filling out all the details, click the “REGISTER” button to submit your form.</p>

                        <h1 className='mb-5 font-semibold'>Important Notes:</h1>
                        <p className='text-sm text-slate-700 mb-3'>- Ensure all the details entered are accurate and match your official records.</p>
                        <p className='text-sm text-slate-700 mb-3'>- Use a strong password to secure your account.</p>
                        <p className='text-sm text-slate-700 mb-28'>- If you face any issues during registration or login, contact our support team at ayushjoshi207@gmail.com .</p>

                        <h1 className='hover:underline hover:decoration-teal-500 mb-4'><a href="/admin-login">Admin Login? Click here</a></h1>
                        <h1 className='hover:underline hover:decoration-teal-500'><a href="/admin-registration">New Admin Registration? Click here</a></h1>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 h-1/2 lg:h-full flex items-center mb-10'>
                    <div className='w-full lg:w-full min-h-[500px] px-5 lg:px-10 py-8 lg:py-10 md:mr-10 shadow-lg bg-white'>
                        <h1 className='text-3xl font-bold text-teal-500 mb-10'>Student Registration</h1>
                        <form onSubmit={handleSubmit} className='w-full h-full flex flex-col justify-center'>
                            <div className='flex flex-col md:flex-row gap-10 mb-10'>
                                <div className='flex flex-col mb-5'>
                                    <div className='mb-2'>
                                        <label htmlFor='name' className='text-slate-700'>Your full name (Surname Yourname Fathername)</label>
                                        <span className='text-amber-500'> *</span>
                                    </div>  
                                    <input type="text" id='name' autoComplete='name' value={formData.name} onChange={handleChange} required placeholder='Enter your full name' className='w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm'/>
                                </div>

                                <div className='flex flex-col mb-10'>
                                    <div className='mb-2'>
                                        <label htmlFor='email' className='text-slate-700'>Your email address</label>
                                        <span className='text-amber-500'> *</span>
                                    </div>
                                    <input type="email" id='email' autoComplete='email' value={formData.email} onChange={handleChange} required placeholder='Enter your email' className='w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm'/>
                                </div>                
                            </div>

                            <div className='flex flex-col md:flex-row gap-10 mb-10'>
                                <div className='flex flex-col mb-10'>
                                    <div className='mb-2'>
                                        <label htmlFor="college" className='text-slate-700'>Select your College</label>
                                        <span className='text-amber-500'> *</span>
                                    </div>
                                    <select name="college" id="college" autoComplete='college' value={formData.college} onChange={handleChange} className='border py-2 outline-none w-64 text-slate-700 rounded-md px-2' required>
                                        <option>Choose College</option>
                                        {colleges.length > 0 ? (
                                            colleges.map((college, index) => (
                                                <option key={index} value={college.name}>{college.name}</option>
                                            ))
                                        ) : (
                                            <option disabled>No colleges available</option>
                                        )}
                                    </select>
                                </div>

                                <div className='flex flex-col mb-5'>
                                    <div className='mb-2'>
                                        <label htmlFor="course" className='text-slate-700'>Select Your Course</label>
                                        <span className='text-amber-500'> *</span>
                                    </div>
                                    <select name="course" id="course" value={formData.course} onChange={handleChange} className='border py-2 outline-none w-64 text-slate-700 rounded-md px-2' required>
                                        <option>Choose Course</option>
                                        {courses.map((course, index) => (
                                            <option key={index} value={course.name}>{course.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-10 mb-10'>
                            <div className='flex flex-col mb-10'>
                                <div className='mb-2'>
                                    <label htmlFor="rollno" className='text-slate-700'>Your Roll Number</label>
                                    <span className='text-amber-500'> *</span>
                                </div>
                                <input type="text" id="rollno" autoComplete="rollno" value={formData.rollno} onChange={handleChange} className='w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm' required placeholder="Enter your roll number"/>
                            </div>

                            <div className='flex flex-col mb-10'>
                                <div className='mb-2'>
                                    <label htmlFor="semester" className='text-slate-700'>Your Semester</label>
                                    <span className='text-amber-500'> *</span>
                                </div>
                                <input type="number" id="semester" autoComplete="semester" value={formData.semester} onChange={handleChange} min="1" max="8" className='w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm' required placeholder="Enter your semester"/>
                            </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-10 mb-10'>
                            <div className='flex flex-col mb-10'>
                                <div className='mb-2'>
                                    <label htmlFor="password" className='text-slate-700'>Create a Password</label>
                                    <span className='text-amber-500'> *</span>
                                </div>
                                <input type="password" id="password" autoComplete="password" value={formData.password} onChange={handleChange} required className='w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm' placeholder="Create a password"/>
                            </div>

                            <div className='flex flex-col mb-10'>
                                <div className='mb-2'>
                                    <label htmlFor="confirmPassword" className='text-slate-700'>Confirm Password</label>
                                    <span className='text-amber-500'> *</span>
                                </div>
                                <input type="password" id="confirmPassword" autoComplete="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className='w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm' placeholder="Re-enter password"/>
                            </div>
                            </div>

                            <div className='flex justify-center'>
                                <button type='submit' className='bg-teal-500 text-white rounded-md py-2 px-8 text-lg'>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentRegister;
