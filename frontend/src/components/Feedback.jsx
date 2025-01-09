import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Feedback = () => {
    const email = localStorage.getItem("email");

    const [formData, setFormData] = useState({
        thoughts: "",
        email: email,
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
            const response = await axios.post("http://localhost:4001/feedback", formData);
            toast.success("Feedback submitted");

            setFormData({ thoughts: "", email: email });

        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong!");
        }
    };

  return (
    <div className='h-full w-screen pt-24 md:px-32 px-5 min-h-screen max-w-screen overflow-x-hidden'>
        <h1 className='text-center text-xl text-amber-500 font-bold mt-10 mb-20'>Your Feedback motivates Us!</h1>
        <div className='flex justify-center items-center flex-col w-full h-full'>
        <div className='w-full lg:w-[450px] h-[500px] px-5 lg:px-10 py-8 lg:py-10 shadow-lg bg-white'>
                    <h1 className='text-3xl font-bold text-teal-500'>Feedback Form</h1>
                    <form onSubmit={handleSubmit} className='w-full h-full flex flex-col justify-center'>
                        
                        <div className='flex flex-col mb-20'>
                            <div className='mb-2'>
                                <label htmlFor='thoughts' className='text-slate-700'>Your thoughts</label>
                                <span className='text-amber-500'> *</span>
                            </div>  
                            <textarea type="text" id='thoughts' required onChange={handleChange} value={formData.thoughts} placeholder='Write here...' className='md:w-64 rounded-md h-20 max-h-40 border border-slate-200 outline-none px-2 text-sm'/>
                        </div>              

                        <button className='w-28 h-10 mb-20 flex justify-center items-center rounded-md bg-amber-500 hover:bg-teal-500 cursor-pointer'>
                            <span className='font-semibold text-white cursor-pointer'>SUBMIT</span>
                        </button>

                    </form>
                </div>
        </div>
    </div>
  )
}

export default Feedback