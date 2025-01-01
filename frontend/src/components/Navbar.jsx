import React from 'react'
import LoginIcon from "../assets/login-icon.svg"
const Navbar = () => {
  return (
    <>
    <div className='absolute h-24 w-screen'>
        <div className="navbar h-24 w-full text-white flex justify-around">
            <div className='logo flex flex-col justify-center items-center h-full w-1/5'>
                    <h1 className='font-extrabold text-2xl'>ePAY</h1>
                    <p className='font-bold text-[10px]'>PAY YOUR FEES</p>
            </div>
            <div className='menuItems flex justify-evenly items-center h-full w-3/6 font-bold'>
                <h1>MENU</h1>
                <h1>EDUCATION FEES</h1>
                <h1>INSTITUTION</h1>
                <h1>CONTACT</h1>
                <h1>ABOUT</h1>
            </div>
            <div className='logIn flex justify-center items-center h-full w-1/5'>
                <div className='font-bold bg-teal-500 rounded-md flex justify-evenly items-center h-12 w-44 hover:bg-amber-600'>
                    <img src={LoginIcon} className='h-4 w-4 ml-3' alt="" />
                    <h1 className='text-sm mr-3'>STUDENT LOGIN</h1>
                </div>
            </div>
        <hr className='h-[1px] w-full border-0 bg-gray-600 absolute bottom-0'/>
        </div>
    </div>
    </>
  )
}

export default Navbar