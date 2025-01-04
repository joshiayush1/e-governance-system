import React, { useState } from 'react'
import LoginIcon from "../assets/login-icon.svg"
import menu from "../assets/bars-solid.svg"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () =>{
    setToggleMenu(!toggleMenu);
  }

  return (
    <>
    <header className='fixed z-10 h-24 w-screen bg-white'>
        <div className="navbar h-24 w-full text-white flex justify-between">
            <div className='logo flex flex-col justify-center items-center h-full md:w-1/5 pl-5 '>
                    <h1 className='font-extrabold text-3xl cursor-pointer text-teal-500'>ePAY</h1>
                    <p className='font-extrabold text-[10px] cursor-pointer text-amber-500'>PAY YOUR FEES</p>
            </div>
            <div className='menuItems lg:flex justify-evenly items-center h-full lg:w-3/6 font-bold hidden text-slate-700'>
                <h1 className='hover:text-amber-500 cursor-pointer duration-700 px-5'>MENU</h1>
                <h1 className='hover:text-amber-500 cursor-pointer duration-700 px-5'>EDUCATION FEES</h1>
                <h1 className='hover:text-amber-500 cursor-pointer duration-700 px-5'>INSTITUTIONS</h1>
                <h1 className='hover:text-amber-500 cursor-pointer duration-700 px-5'>CONTACT</h1>
                <h1 className='hover:text-amber-500 cursor-pointer duration-700 px-5'>ABOUT</h1>
            </div>
            <div className='logIn flex justify-center items-center h-full lg:w-1/5 pr-5'>
                    <div className='hidden font-bold bg-teal-500 rounded-md md:flex justify-evenly items-center h-12 w-44 hover:bg-amber-500 cursor-pointer'>
                    <img src={LoginIcon} className='h-4 w-4 ml-3' alt="" />
                    <h1 className='text-sm mr-3'>STUDENT LOGIN</h1>
                </div>
                    <img src={menu} onClick={handleToggle} alt="" className='h-8 w-8 md:hidden'/>
                    {toggleMenu && (
                        <div className='w-72 h-72 absolute bg-white mt-80 mr-64'>
                            <div className='flex flex-col text-slate-700 font-medium text-xl gap-4'>
                                <h1 className='hover:text-amber-500 cursor-pointer duration-700 px-5'>MENU</h1>
                                <hr />
                                <h1 className='hover:text-amber-500 cursor-pointer duration-700 px-5'>EDUCATION FEES</h1>
                                <hr />
                                <h1 className='hover:text-amber-500 cursor-pointer duration-700 px-5'>INSTITUTIONS</h1>
                                <hr />
                                <h1 className='hover:text-amber-500 cursor-pointer duration-700 px-5'>CONTACT</h1>
                                <hr />
                                <h1 className='hover:text-amber-500 cursor-pointer duration-700 px-5'>ABOUT</h1>
                            </div>
                        </div>
                    )}
            </div>
        <hr className='h-[1px] w-full border-0 bg-white absolute bottom-0 opacity-35'/>
        </div>
    </header>
    </>
  )
}

export default Navbar