import React, { useEffect, useState } from 'react'
import backbtn from "../assets/caret-left-solid.svg"
import courses from '../../public/javascripts/courses.js'; 
import {toast} from "react-hot-toast"

const EducationFees = () => {
  const [studentData, setStudentData] = useState(null);
  const [courseFee, setCourseFee] = useState(null);

  useEffect(() => {
    const studentEmail = localStorage.getItem('email');
    
    if (studentEmail) {
      fetch(`http://localhost:4001/student/student-email/${studentEmail}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setStudentData(data.student);
            const course = courses.find(course => course.name === data.student.course);
            if (course) {
              setCourseFee(course.fee);
            } else {
              toast.error('Course not found in the courses list');
            }
          } else {
            toast.error('Student not found');
          }
        })
        .catch((error) => {
          console.error('Error fetching student data:', error);
        });
    }
  }, []);

  if (!studentData || courseFee === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className='min-h-screen w-screen bg-slate-50'>
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
        <div className='h-full w-full flex flex-col px-28'>
          
            <h1 className='pt-28 mt-10 mb-2 text-xl font-bold text-slate-700'>SELECTED COURSE</h1>
            <span>{studentData.course}</span>

            <div className='mt-10'>
              <h1 className='text-xl font-bold text-slate-700 mb-2'>ACADEMIC FEES</h1>
                <p className='text-sm'>Total Acadmeic fees: </p>
                <span className='text-sm'>27125</span>
            </div>
          
            <div className='mt-10'>
              <h1 className='text-xl font-bold text-slate-700'>FEES STATUS</h1>
              <span className='text-sm mt-2'>{studentData.feesPaid ? 'Paid' : 'Pending'}</span>
            </div>
            <div>
              <button className='h-12 w-32 rounded-md mt-10 text-lg bg-amber-500 hover:bg-teal-500 text-white font-bold'>PAY NOW</button>
            </div>
 {/* <div className='mt-10 h-full w-full md:w-1/3 bg-white rounded-md shadow-xl px-5 py-5 mx-5 md:mx-0'>
            
            <div className='h-full w-full mt-10 mb-10 pr-10 flex'>
              <div className='w-1/2'>
                <h1 className='text-sm text-slate-500'>Student Name</h1>
                <span className='font-semibold'>Ayush Jitendra Joshi</span>
              </div>
              <div className='w-1/2 pl-10'>
                <h1 className='text-sm text-slate-500'>Basic Course</h1>
                <span className='font-semibold'>BSC IT</span>
              </div>
            </div>
            <div className='h-full w-full mb-10 pr-10 flex'>
              <div className='w-1/2'>
                <h1 className='text-sm text-slate-500'>Semester</h1>
                <span className='font-semibold'>SEM 6</span>
              </div>
              <div className='w-1/2 pl-10'>
                <h1 className='text-sm text-slate-500'>Academic year</h1>
                <span className='font-semibold'>2024-2025</span>
              </div>
            </div>
            <div className='h-full w-full mb-10 pr-10 flex'>
              <div className='w-1/2'>
                <h1 className='text-sm text-slate-500'>Amount</h1>
                <span className='font-semibold'>27125</span>
              </div>
              <div className='w-1/2 pl-10'>
                <h1 className='text-sm text-slate-500'>GST Amount</h1>
                <span className='font-semibold'>0</span>
              </div>
            </div>
            <div className='h-full w-full mb-10 pr-10 flex'>
              <div className='w-1/2'>
                <h1 className='text-sm text-slate-500'>Fees</h1>
                <span className='font-semibold'>PAID</span>
              </div>
              <div className='w-1/2 pl-10'>
                <h1 className='text-sm text-slate-500'>Receipt Date</h1>
                <span className='font-semibold'>09-01-2025</span>
              </div>
            </div>

            </div> */}
        </div>
    </div>
  )
}

export default EducationFees