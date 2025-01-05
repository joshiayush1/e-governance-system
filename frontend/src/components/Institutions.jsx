import React from 'react'
import tcsc from"../assets/TCSC-Logo.png"

const Institutions = () => {
  return (
    <div className='h-full max-w-screen overflow-x-hidden relative'>
        <div className='pt-24 text-center w-full h-full'>
            {/* <h1>Institutions We Have Partnered With</h1> */}
            <h1 className='text-xl font-bold text-amber-500 mt-10 mb-10'>Institutions We're Proud to Work With</h1>
            <div className='h-full w-full'>

                <div className='h-32 w-full flex gap-8 md:gap-20 lg::gap-32 px-5 lg:px-32 mb-5'>
                    <div className='h-32 w-16 md:w-32'>
                        <img src={tcsc} alt="" className='w-full h-full object-contain'/>
                    </div>
                    <div className='h-full w-full flex flex-col items-start justify-center'>
                        <h1 className='md:text-2xl font-semibold mt-2 mb-2 lg:mb-4 text-start'>Thakur College of Science & Commerce</h1>
                        <p className='text-xs md:text-sm text-slate-700 font-semibold mb-1 lg:mb-2 line-clamp-1 text-start'>Empowered Autonomous College Permanently Affiliated to University of Mumbai.</p>
                        <p className='text-xs md:text-sm font-semibold text-blue-500 underline underline-offset-2 text-start'><a href="https://www.tcsc.edu.in/">Tap here to visit</a></p>
                    </div>
                </div>
                <hr className='mb-5'/>
                
                <div className='h-32 w-full flex gap-8 md:gap-20 lg::gap-32 px-5 lg:px-32 mb-5'>
                    <div className='h-32 w-16 md:w-32'>
                        <img src={tcsc} alt="" className='w-full h-full object-contain'/>
                    </div>
                    <div className='h-full w-full flex flex-col items-start justify-center'>
                        <h1 className='md:text-2xl font-semibold mt-2 mb-2 lg:mb-4 text-start'>Thakur College of Science & Commerce</h1>
                        <p className='text-xs md:text-sm text-slate-700 font-semibold mb-1 lg:mb-2 line-clamp-1 text-start'>Empowered Autonomous College Permanently Affiliated to University of Mumbai.</p>
                        <p className='text-xs md:text-sm font-semibold text-blue-500 underline underline-offset-2 text-start'><a href="https://www.tcsc.edu.in/">Tap here to visit</a></p>
                    </div>
                </div>
                <hr className='mb-5'/>

            </div>
        </div>
    </div>
  )
}

export default Institutions