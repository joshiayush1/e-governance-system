import React, { useState } from 'react'
import backbtn from "../assets/caret-left-solid.svg"
import axios from 'axios';
import {toast} from 'react-hot-toast';

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.id]: e.target.value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4001/admin/admin-login", formData);
            if (response.data.success) {

                localStorage.setItem("token", response.data.token);
                localStorage.setItem("email", response.data.admin.email);
                localStorage.setItem("role", response.data.admin.role);
        
            toast.success("Login Success");
            

            window.location.href = "/";
        } else {
            toast.error(response.data.message || "Something went wrong!");
        }
        } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong!");
        }
    };
  return (
    <div className='min-h-screen w-screen flex flex-col justify-center items-center bg-slate-50'>
        <a href="" className="absolute top-0 left-0 mr-5 md:ml-10 mt-10">
        <h1 className="font-extrabold text-3xl cursor-pointer text-teal-500">
          ePAY
        </h1>
        <p className="font-extrabold text-[10px] cursor-pointer text-amber-500">
          PAY YOUR FEES
        </p>
      </a>
        <div className='h-screen w-screen flex flex-col lg:flex-row mt-40 lg:mt-0'>
            <div className='h-1/2 lg:h-full w-full lg:w-1/2 flex justify-center items-center'>
                <div className='w-full lg:w-[450px] h-[500px] px-5 py-2 lg:px-10 lg:py-10'>
                    <h1 className='mb-5 font-semibold'>Instructions for Admins : </h1>

                    <p className='text-sm text-slate-700 mb-3'>- Enter your correct details while Logging In.</p>

                    <p className='text-sm text-slate-700 mb-3'>- Enter your username provided by us.</p>
                    <p className='text-sm text-slate-700 mb-3'>- Type your password in the second field.</p>

                    <p className='text-sm text-slate-700 mb-5'>- After entering your credentials, click the "LOGIN" button to access your account.</p>

                    <h1 className='mb-5 font-semibold'>If you are logging in for the first time:</h1>
                    <p className='text-sm text-slate-700 mb-28'>- Click on the “New Admin Registration” link on the login page.</p>

                    <h1 className='hover:underline hover:decoration-teal-500 mb-4'><a href="/student-login">Student Login? Click here</a></h1>
                    <h1 className='hover:underline hover:decoration-teal-500'><a href="/student-registration">New Student Registration? Click here</a></h1>
                </div>
            </div>

            <div className='w-full lg:w-1/2 h-1/2 lg:h-full flex items-center'>
                <div className='w-full lg:w-[450px] h-[500px] px-5 lg:px-10 py-8 lg:py-10 shadow-lg bg-white'>
                    <h1 className='text-3xl font-bold text-teal-500'>Admin Login</h1>
                    <form onSubmit={handleSubmit} className='w-full h-full flex flex-col justify-center'>
                        
                        <div className='flex flex-col mb-5'>
                            <div className='mb-2'>
                                <label className='text-slate-700'>Your username</label>
                                <span className='text-amber-500'> *</span>
                            </div>  
                            <input type="text" id='username' onChange={handleChange} value={formData.username} placeholder='Enter your username' className='w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm'/>
                        </div>

                        <div className='flex flex-col mb-10'>
                            <div className='mb-2'>
                                <label className='text-slate-700'>Your password</label>
                                <span className='text-amber-500'> *</span>
                            </div>
                            <input type="password" id='password' onChange={handleChange} value={formData.password} placeholder='Enter your password' className='w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm'/>
                        </div>                

                        <button className='w-28 h-10 mb-20 flex justify-center items-center rounded-md bg-amber-500 hover:bg-teal-500 cursor-pointer'>
                            <span className='font-semibold text-white cursor-pointer'>LOGIN</span>
                        </button>

                        <h1 className='hover:underline hover:decoration-teal-500'><a href="/admin-registration">New Admin Registration? Click here</a></h1>

                    </form>

                </div>
            </div>

        </div>
    </div>
  )
}

export default AdminLogin