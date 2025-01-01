import React from 'react'
import epay3 from "../assets/epay-image-5.jpeg"
import icon1 from "../assets/pay-now-icon.svg"
import icon2 from "../assets/pay-now-icon2.svg"

const Home = () => {
  return (
    <>
    <div className="section">
        <div className='h-screen w-screen'>
            <div>
            <img src={epay3} alt="" className='w-full h-screen bg-contain'/>
            </div>
            <div className='h-screen w-1/2 absolute top-56 left-32 justify-center text-white'>
                <p className='font-normal text-xl text-amber-600'>Secure Online Payments</p>
                <h1 className='font-extrabold text-7xl leading-snug'>Digital Admissions for a Smarter Tomorrow</h1>
                <div>
                  <div className='flex gap-3 mt-10'>
                 <div className='font-bold bg-teal-400 rounded-md flex justify-evenly items-center h-12 w-40 hover:bg-amber-600'>
                    <img src={icon1} className='h-4 w-4 ml-2' alt="" />
                    <h1 className='text-sm mr-6'>PAY NOW</h1>
                   </div>
                 <div className='font-bold bg-white text-teal-400 rounded-md flex justify-evenly items-center h-12 w-40 hover:bg-amber-600'>
                    <img src={icon2} className='h-4 w-4 ml-2' alt="" />
                    <h1 className='text-sm mr-6'>LEARN MORE</h1>
                   </div>
                  </div>
                </div>
            </div>
        </div>
    </div>    
    </>
  )
}

export default Home