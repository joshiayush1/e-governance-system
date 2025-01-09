import React, { useState } from 'react'
import LoginIcon from "../assets/login-icon.svg"
import menu from "../assets/bars-solid.svg"
import cross from "../assets/xmark-solid.svg"
import {Link} from "react-router-dom"

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () =>{
    setToggleMenu(!toggleMenu);
  }

  const role = localStorage.getItem("role");

  return (
    <>
    <header className='fixed z-10 h-24 w-screen bg-white max-w-screen overflow-x-hidden'>
        <div className="navbar h-24 w-full text-white flex justify-between">
            <div className='logo flex flex-col justify-center items-center h-full md:w-1/5 pl-5 '>
                    <h1 className='font-extrabold text-3xl cursor-pointer text-teal-500'><Link to="/">ePAY</Link></h1>
                    <p className='font-extrabold text-[10px] cursor-pointer text-amber-500'><Link to="/">PAY YOUR FEES</Link></p>
            </div>
            <ul className='menuItems lg:flex justify-evenly items-center h-full lg:w-3/6 font-bold hidden text-slate-700'>
                <li className='hover:text-amber-500 cursor-pointer duration-700 px-5'><Link to="/">HOME</Link></li>
                {role == "Admin" ?
                <li className='hover:text-amber-500 cursor-pointer duration-700 px-5'><Link to="/student-payments">PAYMENTS</Link></li>
                :
                <li className='hover:text-amber-500 cursor-pointer duration-700 px-5'><Link to="/institute-fees">EDUCATION FEES</Link></li>
                }
                <li className='hover:text-amber-500 cursor-pointer duration-700 px-5'> <Link to="/institutions">INSTITUTIONS</Link></li>
                <li className='hover:text-amber-500 cursor-pointer duration-700 px-5'>FEEDBACK</li>
                <li className='hover:text-amber-500 cursor-pointer duration-700 px-5'>ABOUT</li>
            </ul>

            <div className='logIn flex justify-center items-center h-full lg:w-1/5 pr-5'>
            {role == "Admin" || "login" ?
                <Link to="/logout">
                    <div className='font-bold bg-teal-500 rounded-md flex justify-evenly items-center h-12 w-32 hover:bg-amber-500 cursor-pointer'>
                    <img src={LoginIcon} className='h-4 w-4 ml-3' alt="" />
                    <h1 className='text-sm mr-3'>LOGOUT</h1>
                </div>
                </Link>
            :
            <Link to="/student-login">
            <div className='font-bold bg-teal-500 rounded-md flex justify-evenly items-center h-12 w-32 hover:bg-amber-500 cursor-pointer'>
            <img src={LoginIcon} className='h-4 w-4 ml-3' alt="" />
            <h1 className='text-sm mr-3'>LOGIN</h1>
            </div>
            </Link>
            }
                {toggleMenu ? 
                    <img src={cross} onClick={handleToggle} alt="" className='h-8 w-8 md:hidden ml-4'/>
                    : 
                    <img src={menu} onClick={handleToggle} alt="" className='h-8 w-8 md:hidden ml-4'/>
                }
                    {toggleMenu && (
                        <div className='w-4/6 h-[300px] fixed bg-teal-100 mt-[360px] mr-24 z-50 md:hidden'>
                            <div className='h-full w-full flex flex-col text-slate-700 font-medium text-xl gap-4'>
                                <h1 className='hover:text-amber-500 cursor-pointer duration-700 px-5 pt-3'><Link to="/">HOME</Link></h1>
                                <hr className='border'/>
                                {role == "Admin" ?
                                <h1 className='hover:text-amber-500 cursor-pointer duration-700 px-5'><Link to="/student-payments">PAYMENTS</Link></h1>
                                :
                                <h1 className='hover:text-amber-500 cursor-pointer duration-700 px-5'><Link to="/institute-fees">EDUCATION FEES</Link></h1>
                                }
                                <hr className='border'/>
                                <h1 className='hover:text-amber-500 cursor-pointer duration-700 px-5'><Link to="/institutions">INSTITUTIONS</Link></h1>
                                <hr className='border'/>
                                <h1 className='hover:text-amber-500 cursor-pointer duration-700 px-5'>FEEDBACK</h1>
                                <hr className='border'/>
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

export default Header