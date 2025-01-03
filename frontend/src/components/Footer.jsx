import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='footer h-96 md:h-56 mt-[950px] md:mt-72 bg-sky-950 w-screen border-5 border-red-700 flex flex-col md:flex-row text-white'>
            <div className='logo flex flex-col h-full md:w-1/2  pl-5 md:pl-32 pt-10'>
                    <h1 className='font-extrabold text-3xl cursor-pointer text-teal-500'>ePAY</h1>
                    <p className='font-extrabold text-[10px] cursor-pointer text-amber-500'>PAY YOUR FEES</p>
                    
                    <p className="mt-10 font-semibold tracking-tight">Simplifying payments and enhancing digital convenience for you.</p>
            </div>
                <div className="w-1/2 h-full flex flex-col justify-center pl-5">
                <div className="gap-4 flex">
                  <span className="text-amber-500">Email:</span>ayushjoshi207@gmail.com
                </div>
                <div className="gap-4 flex">
                  <span className="text-amber-500">LinkedIn:</span><a href="https://www.linkedin.com/in/ayush-joshi-202902293/" className="underline underline-offset-2">Tap here</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer