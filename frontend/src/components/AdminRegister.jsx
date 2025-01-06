import React from 'react'
import backbtn from "../assets/caret-left-solid.svg"

const AdminRegister = () => {
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
                        <h1 className='mb-5 font-semibold'>Instructions for Institute Admins:</h1>

                        <p className='text-sm text-slate-700 mb-3'>- Enter Your Correct Details: Ensure all information provided during registration or login is accurate and up-to-date.</p>
                        <p className='text-sm text-slate-700 mb-3'>- Enter your full name in the format: Surname Yourname Fathername.</p>
                        <p className='text-sm text-slate-700 mb-3'>- Provide your official email address for communication purposes.</p>
                        <p className='text-sm text-slate-700 mb-3'>- Enter the complete name of the institution or college you represent.</p>
                        <p className='text-sm text-slate-700 mb-3'>- Specify the city where your institution is located.</p>
                        <p className='text-sm text-slate-700 mb-3'>- Upload a valid official document (e.g., institution ID, authorization letter) to verify your credentials as an admin.</p>
                        <p className='text-sm text-slate-700 mb-3'>- Provide a valid UPI ID that will be used for transactions (e.g., fee payments).</p>
                        <p className='text-sm text-slate-700 mb-3'>- Enter a secure password for your admin account.</p>
                        <p className='text-sm text-slate-700 mb-3'>- Re-enter the password to ensure accuracy.</p>
    
                        <p className='text-sm text-slate-700 mb-5'>- Click on the "REQUEST" button to submit your registration request.</p>

                        <h1 className='mb-5 font-semibold'>Important Notes:</h1>
                        <p className='text-sm text-slate-700 mb-3'>- Requests will typically be processed within 2-3 business days. Please ensure that all provided information is accurate to avoid any delays. Check your email regularly for updates on approval or rejection.</p>
                        <p className='text-sm text-slate-700 mb-3'>- Double-check all details before submitting, as inaccurate information may delay approval.</p>
                        <p className='text-sm text-slate-700 mb-3'>- Use a strong password to enhance the security of your admin account.</p>
                        <p className='text-sm text-slate-700 mb-28'>- If you face any issues during registration or login, contact our support team at ayushjoshi207@gmail.com .</p>
    
                        <h1 className='hover:underline hover:decoration-teal-500 mb-4'><a href="/admin-login">Student Login? Click here</a></h1>
                        <h1 className='hover:underline hover:decoration-teal-500'><a href="/admin-registration">New Student Registration? Click here</a></h1>
                    </div>
                </div>
    
                <div className='w-full lg:w-1/2 h-1/2 lg:h-full flex items-center mb-10'>
                    <div className='w-full lg:w-full min-h-[500px] px-5 lg:px-10 py-8 lg:py-10 md:mr-10 shadow-lg bg-white'>
                        <h1 className='text-3xl font-bold text-teal-500 mb-10'>Admin Registration</h1>
                        <form action="" className='w-full h-full flex flex-col justify-center'>
                            
                            <div className='flex flex-col md:flex-row gap-10 mb-10'>
                                <div className='flex flex-col mb-5'>
                                    <div className='mb-2'>
                                        <label htmlFor='name' className='text-slate-700'>Your full name (Surname Yourname Fathername)</label>
                                        <span className='text-amber-500'> *</span>
                                    </div>  
                                    <input type="text" id='name' autoComplete='name' placeholder='Enter your full name' className='w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm'/>
                                </div>
        
                                <div className='flex flex-col mb-10'>
                                    <div className='mb-2'>
                                        <label htmlFor='email' className='text-slate-700'>Your email address</label>
                                        <span className='text-amber-500'> *</span>
                                    </div>
                                    <input type="email" id='email' autoComplete='email' placeholder='Enter your email' className='w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm'/>
                                </div>                
                            </div>

                            <div className='flex flex-col md:flex-row gap-10 mb-10'>
                                <div className='flex flex-col mb-10'>
                                    <div className='mb-2'>
                                        <label htmlFor="college" className='text-slate-700'>Write Institution/College name</label>
                                        <span className='text-amber-500'> *</span>
                                    </div>
                                    <input id="college" autoComplete='college' placeholder='Enter Institution name' className='w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm' />
                                </div>       

                                <div className='flex flex-col mb-5'>
                                    <div className='mb-2'>
                                        <label htmlFor="course" className='text-slate-700'>City name</label>
                                        <span className='text-amber-500'> *</span>
                                    </div>  
                                    <input id="course" autoComplete='course' placeholder='Enter city' className='w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm' />
                                </div>
        
                            </div>

                            <div className='flex flex-col md:flex-row gap-10 mb-10'>
                                <div className='flex flex-col mb-10'>
                                    <div className='mb-2'>
                                        <label htmlFor='rollno' className='text-slate-700'>Upload Identification Document</label>
                                        <span className='text-amber-500'> *</span>
                                    </div>
                                    <input type="file" id='file'hidden/>
                                    <button id='rollno' className='w-64 rounded-md h-10 border bg-amber-500 hover:bg-amber-400 text-white outline-none px-2 text-sm'>Choose a file</button>
                                </div>  
        
                                <div className='flex flex-col mb-10'>
                                    <div className='mb-2'>
                                        <label htmlFor='aaddharno' className='text-slate-700'>UPI ID</label>
                                        <span className='text-amber-500'> *</span>
                                    </div>
                                    <input type="number" id='aaddharno' autoComplete='aadharno' placeholder='Enter aadhar number' className='w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm'/>
                                </div>                
                            </div>

                            <div className='flex flex-col md:flex-row gap-10 mb-10'>
                                <div className='flex flex-col mb-5'>
                                    <div className='mb-2'>
                                        <label htmlFor='password' className='text-slate-700'>Create a password</label>
                                        <span className='text-amber-500'> *</span>
                                    </div>  
                                    <input type="password" id='password' autoComplete='new-password' placeholder='Enter your password' className='w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm'/>
                                </div>
        
                                <div className='flex flex-col mb-10'>
                                    <div className='mb-2'>
                                        <label htmlFor='confirmpassword' className='text-slate-700'>Confirm password</label>
                                        <span className='text-amber-500'> *</span>
                                    </div>
                                    <input type="password" id='confirmpassword' autoComplete='new-password' placeholder='Enter your password again' className='w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm'/>
                                </div>                
                            </div>
    
    
                            <div className='w-28 h-10 mb-20 flex justify-center items-center rounded-md bg-amber-500 hover:bg-teal-500 cursor-pointer'>
                                <input type="button" value="REQUEST" className='font-semibold text-white cursor-pointer'/>
                            </div>
    
                            <h1 className='hover:underline hover:decoration-teal-500'><a href="/admin-login">Already Registered? Click here</a></h1>
    
                        </form>
    
                    </div>
                </div>
    
            </div>
        </div>
  )
}

export default AdminRegister