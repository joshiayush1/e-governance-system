import React, { useEffect, useState } from 'react';
import axios from 'axios';
import tcsc from "../assets/TCSC-logo.png";

const Payments = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4001/all-students-data')
      .then((response) => {
        if (response.data.success) {
          setStudents(response.data.students);
        } else {
          console.error("Failed to fetch student data");
        }
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, []);

  return (
    <div className='h-full max-w-screen overflow-x-hidden relative'>
      <div className='pt-24 text-center w-full h-full'>
        <h1 className='text-xl font-bold text-amber-500 mt-10 mb-10'>Students that have made payments to your institution</h1>
        <div className='h-full w-full'>
          {students.length > 0 ? (
            students.map((student, index) => (
              <div key={index} className='h-32 w-full flex gap-8 md:gap-20 lg:gap-32 px-5 lg:px-32 mb-5'>
                <div className='h-32 w-16 md:w-32'>
                  <img src={tcsc} className='w-full h-full object-contain' alt="Institution Logo" />
                </div>
                <div className='h-full w-full flex flex-col items-start justify-center'>
                  <h1 className='md:text-2xl font-semibold mt-2 mb-2 lg:mb-4 text-start'>{student.name}</h1>
                  <div className='flex gap-5'>
                  <p className='text-xs md:text-sm font-semibold text-blue-500 text-start'>{student.course}</p>
                  <p className='text-xs md:text-sm font-semibold text-blue-500 text-start'>{student.college}</p>
                  </div>
                  <p>Fees: {student.feesPaid ? "Paid" : "Pending"}</p>
                </div>
              </div>
            ))  
          ) : (
            <p>No student data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payments;
