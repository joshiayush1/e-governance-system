"use client";
import React, { useEffect, useState } from "react";
import backbtn from "../assets/caret-left-solid.svg";
import courses from "../../public/javascripts/courses.js";
import { toast } from "react-hot-toast";
import axios from "axios"

const EducationFees = () => {
  const [studentData, setStudentData] = useState(null);
  const [courseFee, setCourseFee] = useState(null);

  useEffect(() => {
    const studentEmail = localStorage.getItem("email");

    if (studentEmail) {
      fetch(`http://localhost:4001/student/student-email/${studentEmail}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setStudentData(data.student);
            const course = courses.find((course) => course.name === data.student.course);
            if (course) {
              setCourseFee(course.fee);
            } else {
              toast.error("Course not found in the courses list");
            }
          } else {
            toast.error("Student not found");
          }
        })
        .catch((error) => {
          console.error("Error fetching student data:", error);
        });
    }
  }, []);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };


const onPayment = async () => {
  const razorpayLoaded = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!razorpayLoaded) {
    toast.error("Failed to load Razorpay SDK.");
    return;
  }

  try {
    const response = await fetch("http://localhost:4001/payment/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        course: studentData.course,
        amount: courseFee,
      }),
    });

    const order = await response.json();

    if (!order || !order.id) {
      toast.error("Failed to create Razorpay order.");
      return;
    }

    // Open Razorpay checkout
    const options = {
      key: "rzp_test_vzm2netaYVGUsK", 
      amount: order.amount,
      currency: order.currency,
      name: "ePAY",
      description: `Payment for ${studentData.course}`,
      order_id: order.id,
      handler: async (response) => {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;

        try {
          // Verify payment
          const verificationResponse = await fetch("http://localhost:4001/payment/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              order_id: razorpay_order_id,
              payment_id: razorpay_payment_id,
              signature: razorpay_signature,
            }),
          });

          const verificationResult = await verificationResponse.json();

          if (verificationResult.success) {
            // Now update the payment status using axios
            try {
              const updateResponse = await axios.put("http://localhost:4001/update-payment-status", {
                email: studentData.email,
                feesPaid: true,
              });

              if (updateResponse.data.success) {
                setStudentData((prevData) => ({
                  ...prevData,
                  feesPaid: true,
                }));
                toast.success("Payment status updated successfully!");
              } else {
                toast.error("Failed to update payment status.");
              }
            } catch (error) {
              console.error("Error updating payment status:", error);
              toast.error("Payment status update failed.");
            }
          } else {
            toast.error("Payment verification failed.");
          }
        } catch (error) {
          console.error("Error verifying payment:", error);
          toast.error("Payment verification failed.");
        }
      },
      prefill: {
        name: studentData.name,
        email: studentData.email,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  } catch (error) {
    console.error("Error during payment process:", error);
    toast.error("Payment failed. Please try again.");
  }
};

  

  if (!studentData || courseFee === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen w-screen bg-slate-50">
      <a href="/">
        <h1 className="absolute top-0 left-0 h-10 w-28 md:w-40 rounded-md bg-teal-500 hover:bg-amber-500 ml-5 md:ml-10 mt-10 flex justify-center items-center text-sm font-bold text-white cursor-pointer">
          <img src={backbtn} alt="Back" className="h-full w-2 lg:w-3 mr-2 lg:mr-4" />
          Go to Home
        </h1>
      </a>
      <a href="/" className="absolute top-0 right-0 mr-5 md:mr-10 mt-10">
        <h1 className="font-extrabold text-3xl cursor-pointer text-teal-500">ePAY</h1>
        <p className="font-extrabold text-[10px] cursor-pointer text-amber-500">PAY YOUR FEES</p>
      </a>
      <div className="h-full w-full flex flex-col px-28">
        <h1 className="pt-28 mt-10 mb-2 text-xl font-bold text-slate-700">SELECTED COURSE</h1>
        <span>{studentData.course}</span>

        <div className="mt-10">
          <h1 className="text-xl font-bold text-slate-700 mb-2">ACADEMIC FEES</h1>
          <p className="text-sm">Total Academic fees: </p>
          <span className="text-sm">{courseFee}</span>
        </div>

        <div className="mt-10">
          <h1 className="text-xl font-bold text-slate-700">FEES STATUS</h1>
          <span className="text-sm mt-2">{studentData.feesPaid ? "Paid" : "Pending"}</span>
        </div>
        <div>
          {!studentData.feesPaid && (
            <button
              className="h-12 w-32 rounded-md mt-10 text-lg bg-amber-500 hover:bg-teal-500 text-white font-bold"
              onClick={onPayment}
            >
              PAY NOW
            </button>
          )}
        </div>

        {studentData.feesPaid ? 
  <div className='mt-10 h-full w-full md:w-1/3 bg-white rounded-md shadow-xl px-5 py-5 mx-5 md:mx-0'>
    <div className='h-full w-full mt-10 mb-10 pr-10 flex'>
      <div className='w-1/2'>
        <h1 className='text-sm text-slate-500'>Student Name</h1>
        <span className='font-semibold'>{studentData.name}</span>
      </div>
      <div className='w-1/2 pl-10'>
        <h1 className='text-sm text-slate-500'>Basic Course</h1>
        <span className='font-semibold'>{studentData.course}</span>
      </div>
    </div>
    <div className='h-full w-full mb-10 pr-10 flex'>
      <div className='w-1/2'>
        <h1 className='text-sm text-slate-500'>Semester</h1>
        <span className='font-semibold'>{studentData.semester}</span>
      </div>
      <div className='w-1/2 pl-10'>
        <h1 className='text-sm text-slate-500'>Academic year</h1>
        <span className='font-semibold'>2024-2025</span>
      </div>
    </div>
    <div className='h-full w-full mb-10 pr-10 flex'>
      <div className='w-1/2'>
        <h1 className='text-sm text-slate-500'>Amount</h1>
        <span className='font-semibold'>{courseFee}</span>
      </div>
      <div className='w-1/2 pl-10'>
        <h1 className='text-sm text-slate-500'>GST Amount</h1>
        <span className='font-semibold'>{studentData.gstAmount || 0}</span>
      </div>
    </div>
    <div className='h-full w-full mb-10 pr-10 flex'>
      <div className='w-1/2'>
        <h1 className='text-sm text-slate-500'>Fees</h1>
        <span className='font-semibold'>PAID</span>
      </div>
      <div className='w-1/2 pl-10'>
        <h1 className='text-sm text-slate-500'>Receipt Date</h1>
        <span className='font-semibold'>{new Date().toLocaleDateString()}</span>
      </div>
    </div>
  </div>
  : 
  ""
  }
      </div>
    </div>
  );
};

export default EducationFees;