import React from 'react'
import tcsc from"../assets/TCSC-Logo.png"

const Institutions = () => {
  return (
    <div className='h-full max-w-screen overflow-x-hidden'>
        <div className='pt-24 text-center w-full h-full'>
            {/* <h1>Institutions We Have Partnered With</h1> */}
            <h1 className='text-xl font-bold text-amber-500 mt-10 mb-20'>Institutions We're Proud to Work With</h1>
            <div className='h-full w-full'>

                <div className='h-32 w-full flex gap-32 px-32 mb-5'>
                    <div className='h-32 w-32'>
                        <img src={tcsc} alt="" className='w-full h-full object-contain'/>
                    </div>
                    <div className='flex flex-col items-start'>
                        <h1 className='text-2xl font-semibold mt-2 mb-4'>Thakur College of Science & Commerce</h1>
                        <p className='text-sm text-slate-700 font-semibold mb-2'>Empowered Autonomous College Permanently Affiliated to University of Mumbai.</p>
                        <p className='text-sm font-semibold text-blue-500 underline underline-offset-2'><a href="https://www.tcsc.edu.in/">Tap here to visit</a></p>
                    </div>
                </div>
                
                <hr className='mb-5'/>
                <div className='h-32 w-full flex gap-32 px-32 mb-5'>
                    <div className='h-full w-32'>
                        <img src={tcsc} alt="" className='w-full h-full object-contain'/>
                    </div>
                    <div className='flex flex-col items-start'>
                        <h1 className='text-2xl font-semibold mt-2 mb-4'>Thakur College of Science & Commerce</h1>
                        <p className='text-sm text-slate-700 font-semibold mb-2'>Empowered Autonomous College Permanently Affiliated to University of Mumbai.</p>
                        <p className='text-sm font-semibold text-blue-500 underline underline-offset-2'><a href="https://www.tcsc.edu.in/">Tap here to visit</a></p>
                    </div>
                </div>
                <hr className='mb-5'/>

            </div>
        </div>
    </div>
  )
}

export default Institutions