import React, { useState } from 'react'
import backbtn from "../assets/caret-left-solid.svg"
import axios from "axios";
import {toast} from "react-hot-toast"

const StudentRegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        college: '',
        course: '',
        rollno: '',
        semester: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.id]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData.password !== formData.confirmPassword) toast.error("Passwords do not match!");
        try {
            const response = await axios.post("http://localhost:4001/student/student-register", formData);
            toast.success("Registration Success");
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong!");
        }
    };

  return (
    <div className='min-h-screen max-w-screen overflow-x-hidden flex flex-col justify-center items-center bg-slate-50'>
            <a href="/">
                <h1 className='absolute top-0 left-0 h-10 w-28 md:w-40 rounded-md bg-teal-500 hover:bg-amber-500 ml-5 md:ml-10 mt-10 flex justify-center items-center text-sm font-bold text-white cursor-pointer'>
                    <img src={backbtn} alt="" className='h-full w-2 lg:w-3 mr-2 lg:mr-4'/>
                        Go to Home
                 </h1>
            </a>
            <a href="" className='absolute top-0 right-0 mr-5 md:mr-10 mt-10'>
                <h1 className='font-extrabold text-3xl cursor-pointer text-teal-500'>ePAY</h1>
                <p className='font-extrabold text-[10px] cursor-pointer text-amber-500'>PAY YOUR FEES</p>
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
                                    <select name="college" id="college" autoComplete='college' value={formData.college} onChange={handleChange} className='border py-2 outline-none w-64 text-slate-700 rounded-md' required>
                                        <option>Choose College</option>
                                        <option value="Thakur College of Commerce and Science">Thakur College of Commerce and Science</option>
                                    </select>
                                </div>       

                                <div className='flex flex-col mb-5'>
                                    <div className='mb-2'>
                                        <label htmlFor="course" className='text-slate-700'>Select Your Course</label>
                                        <span className='text-amber-500'> *</span>
                                    </div>  
                                    <select name="course" id="course" autoComplete='course' value={formData.course} onChange={handleChange} className='border py-2 outline-none w-64 text-slate-700 rounded-md' required>
                                        <option>Choose Course</option>
                                        <option value="B.Com. (Investment Management)">B.Com. (Investment Management)</option>
                                        <option value="B.Com. Financial Markets">B.Com. Financial Markets</option>
                                        <option value="B.Com. Banking & Insurance">B.Com. Banking & Insurance</option>
                                        <option value="BA MMC">BA MMC</option>
                                        <option value="B.A. (Film TV & New Media Production)">B.A. (Film TV & New Media Production)</option>
                                        <option value="BCom (Accounting & Finance)">BCom (Accounting & Finance)</option>
                                        <option value="B.Com. (Management Studies) / B.M.S.">B.Com. (Management Studies) / B.M.S.</option>
                                        <option value="B.Com.">B.Com.</option>
                                        <option value="B.Sc. Aviation">B.Sc. Aviation</option>
                                        <option value="B.Sc. Bio Technology">B.Sc. Bio Technology</option>
                                        <option value="B.Sc. C.S.">B.Sc. C.S.</option>
                                        <option value="B.Sc. I.T.">B.Sc. I.T.</option>
                                        <option value="B.Sc.">B.Sc.</option>
                                        <option value="BSc in Actuarial Science">BSc in Actuarial </option>
                                        <option value="B.Com. (Service Industry Management)">B.Com. (Service Industry Management)</option>
                                        <option value="BSc in Artificial Intelligence and Machine Learning">BSc in Artificial Intelligence and Machine Learning</option>
                                        <option value="Bachelor / Bachelor (Hons.) of Sports Management">Bachelor / Bachelor (Hons.) of Sports Management</option>
                                        <option value="B.Com. in Business Administration (Professional Accountancy & Financial Management)">B.Com. in Business Administration (Professional Accountancy & Financial Management)</option>
                                        <option value="B.Sc. / B.Sc. (Hons.) in Interior Design">B.Sc. / B.Sc. (Hons.) in Interior Design</option>
                                        <option value="Bachelor of Sports Science">Bachelor of Sports Science</option>
                                        <option value="B.Com. Digital Business">B.Com. Digital Business</option>
                                        <option value="B.Sc. (Data Science)">B.Sc. (Data Science)</option>
                                        <option value="B.Sc.(Animation & VFX)">B.Sc.(Animation & VFX)</option>
                                        <option value="B.Sc. Actuarial Science">B.Sc. Actuarial Science</option>
                                        <option value="B.Com. Honours">B.Com. Honours</option>
                                        <option value="BCom (Entrepreneurship)">BCom (Entrepreneurship)</option>
                                        <option value="BCom (Retail Operations)">BCom (Retail Operations)</option>
                                        <option value="B.Com (International Accounting)">B.Com (International Accounting)</option>
                                    </select>
                                </div>
        
                            </div>

                            <div className='flex flex-col md:flex-row gap-10 mb-10'>
                                <div className='flex flex-col mb-10'>
                                    <div className='mb-2'>
                                        <label htmlFor='rollno' className='text-slate-700'>Your roll number</label>
                                        <span className='text-amber-500'> *</span>
                                    </div>
                                    <input type="text" id='rollno' autoComplete='rollno' value={formData.rollno} onChange={handleChange} required placeholder='Enter your roll no.' className='w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm'/>
                                </div>  
        
                                <div className='flex flex-col mb-10'>
                                    <div className='mb-2'>
                                        <label htmlFor='semester' className='text-slate-700'>Your Semester number (1, 2, 3, ..)</label>
                                        <span className='text-amber-500'> *</span>
                                    </div>
                                    <input type="number" id='semester' autoComplete='semester' value={formData.semester} onChange={handleChange} required placeholder='Enter Semester number' className='w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm'/>
                                </div>                
                            </div>

                            <div className='flex flex-col md:flex-row gap-10 mb-10'>
                                <div className='flex flex-col mb-5'>
                                    <div className='mb-2'>
                                        <label htmlFor='password' className='text-slate-700'>Create a password</label>
                                        <span className='text-amber-500'> *</span>
                                    </div>  
                                    <input type="password" id='password' value={formData.password} onChange={handleChange} required placeholder='Enter your password' className='w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm'/>
                                </div>
        
                                <div className='flex flex-col mb-10'>
                                    <div className='mb-2'>
                                        <label htmlFor='confirmPassword' className='text-slate-700'>Confirm password</label>
                                        <span className='text-amber-500'> *</span>
                                    </div>
                                    <input type="password" id='confirmPassword' value={formData.confirmPassword} onChange={handleChange} required placeholder='Enter your password again' className='w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm'/>
                                </div>                
                            </div>
    
    
                            <button type="submit" className='w-28 h-10 mb-20 flex justify-center items-center rounded-md bg-amber-500 hover:bg-teal-500 cursor-pointer'>
                                <span className='font-semibold text-white cursor-pointer'>REGISTER</span>
                            </button>  
    
                            <h1 className='hover:underline hover:decoration-teal-500'><a href="/student-login">Already Registered? Click here</a></h1>
    
                        </form>
    
                    </div>
                </div>
    
            </div>
        </div>
  )
}

export default StudentRegister