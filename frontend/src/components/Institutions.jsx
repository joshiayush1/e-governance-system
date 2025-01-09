import React, { useEffect, useState } from 'react';
import tcsc from "../assets/TCSC-Logo.png"; 

const Institutions = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await fetch("http://localhost:4001/api/colleges");
        if (!response.ok) {
          throw new Error("Failed to fetch colleges");
        }
        const data = await response.json();
        setColleges(data);
      } catch (error) {
        console.error("Error fetching colleges:", error);
      }
    };

    fetchColleges();
  }, []);

  return (
    <div className='h-full max-w-screen overflow-x-hidden relative'>
      <div className='pt-24 text-center w-full h-full'>
        <h1 className='text-xl font-bold text-amber-500 mt-10 mb-10'>Institutions We're Proud to Work With</h1>
        <div className='h-full w-full'>
          {colleges.length > 0 ? (
            colleges.map((college, index) => (
              <div key={index} className='h-32 w-full flex gap-8 md:gap-20 lg::gap-32 px-5 lg:px-32 mb-5'>
                <div className='h-32 w-16 md:w-32'>
                  {/* Placeholder image for each college */}
                  <img src={tcsc} alt={college.name} className='w-full h-full object-contain' />
                </div>
                <div className='h-full w-full flex flex-col items-start justify-center'>
                  <h1 className='md:text-2xl font-semibold mt-2 mb-2 lg:mb-4 text-start'>{college.name}</h1>
                  <p className='text-xs md:text-sm font-semibold text-blue-500 underline underline-offset-2 text-start'>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading colleges...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Institutions;
