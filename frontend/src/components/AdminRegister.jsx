import React, { useRef, useState } from "react";
import backbtn from "../assets/caret-left-solid.svg";
import axios from "axios";
import { toast } from "react-hot-toast";

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    city: "",
    address: "",
    upiid: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword)
      return toast.error("Passwords do not match!");

    try {
      const response = await axios.post(
        "http://localhost:4001/admin/admin-register",
        formData
      );
      toast.success("Request Success");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden flex flex-col justify-center items-center bg-slate-50">
      <a href="" className="absolute top-0 left-0 mr-5 md:ml-10 mt-10">
        <h1 className="font-extrabold text-3xl cursor-pointer text-teal-500">
          ePAY
        </h1>
        <p className="font-extrabold text-[10px] cursor-pointer text-amber-500">
          PAY YOUR FEES
        </p>
      </a>
      <div className="h-full w-screen flex flex-col lg:flex-row mt-40 lg:mt-40">
        <div className="h-full lg:h-full w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full lg:w-[450px] min-h-[500px] px-5 py-2 lg:px-10 lg:py-10">
            <h1 className="mb-5 font-semibold">Instructions for Institute Admins:</h1>

            <p className="text-sm text-slate-700 mb-3">
              - Enter Your Correct Details: Ensure all information provided
              during registration or login is accurate and up-to-date.
            </p>
            <p className="text-sm text-slate-700 mb-3">
              - Enter your full name in the format: Surname Yourname Fathername.
            </p>
            <p className="text-sm text-slate-700 mb-3">
              - Provide your official email address for communication purposes.
            </p>
            <p className="text-sm text-slate-700 mb-3">
              - Enter the complete name of the institution or college you
              represent.
            </p>
            <p className="text-sm text-slate-700 mb-3">
              - Specify the city where your institution is located.
            </p>
            <p className="text-sm text-slate-700 mb-3">
              - Enter the address where institution is located.
            </p>
            <p className="text-sm text-slate-700 mb-3">
              - Provide a valid UPI ID that will be used for transactions (e.g.,
              fee payments).
            </p>
            <p className="text-sm text-slate-700 mb-3">
              - Enter a secure password for your admin account.
            </p>
            <p className="text-sm text-slate-700 mb-3">
              - Re-enter the password to ensure accuracy.
            </p>

            <p className="text-sm text-slate-700 mb-5">
              - Click on the "REQUEST" button to submit your registration
              request.
            </p>

            <h1 className="mb-5 font-semibold">Important Notes:</h1>
            <p className="text-sm text-slate-700 mb-3">
              - Requests will typically be processed within 2-3 business days.
              Please ensure that all provided information is accurate to avoid
              any delays. Check your email regularly for updates on approvals.
            </p>
            <p className="text-sm text-slate-700 mb-3">
              - Double-check all details before submitting, as inaccurate
              information may delay approval.
            </p>
            <p className="text-sm text-slate-700 mb-3">
              - Use a strong password to enhance the security of your admin
              account.
            </p>
            <p className="text-sm text-slate-700 mb-28">
              - If you face any issues during registration or login, contact our
              support team at ayushjoshi207@gmail.com .
            </p>

            <h1 className="hover:underline hover:decoration-teal-500 mb-4">
              <a href="/student-login">Student Login? Click here</a>
            </h1>
            <h1 className="hover:underline hover:decoration-teal-500">
              <a href="/student-registration">
                New Student Registration? Click here
              </a>
            </h1>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center mb-10">
          <div className="w-full lg:w-full min-h-[500px] px-5 lg:px-10 py-8 lg:py-10 md:mr-10 shadow-lg bg-white">
            <h1 className="text-3xl font-bold text-teal-500 mb-10">
              Admin Registration
            </h1>
            <form
              onSubmit={handleSubmit}
              className="w-full h-full flex flex-col justify-center"
            >
              <div className="flex flex-col md:flex-row gap-10 mb-10">
                <div className="flex flex-col mb-5">
                  <div className="mb-2">
                    <label htmlFor="name" className="text-slate-700">
                      Your full name (Surname Yourname Fathername)
                    </label>
                    <span className="text-amber-500"> *</span>
                  </div>
                  <input
                    type="text"
                    id="name"
                    autoComplete="name"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="Enter your full name"
                    className="w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm"
                    required
                  />
                </div>

                <div className="flex flex-col mb-10">
                  <div className="mb-2">
                    <label htmlFor="email" className="text-slate-700">
                      Your email address
                    </label>
                    <span className="text-amber-500"> *</span>
                  </div>
                  <input
                    type="email"
                    id="email"
                    onChange={handleChange}
                    value={formData.email}
                    autoComplete="email"
                    placeholder="Enter your email"
                    className="w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-10 mb-10">
                <div className="flex flex-col mb-10">
                  <div className="mb-2">
                    <label htmlFor="college" className="text-slate-700">
                      Write Institution/College name
                    </label>
                    <span className="text-amber-500"> *</span>
                  </div>
                  <input
                    id="college"
                    onChange={handleChange}
                    value={formData.college}
                    autoComplete="college"
                    placeholder="Enter Institution name"
                    className="w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm"
                    required
                  />
                </div>

                <div className="flex flex-col mb-5">
                  <div className="mb-2">
                    <label htmlFor="city" className="text-slate-700">
                      City name
                    </label>
                    <span className="text-amber-500"> *</span>
                  </div>
                  <input
                    id="city"
                    onChange={handleChange}
                    value={formData.city}
                    autoComplete="city"
                    placeholder="Enter city"
                    className="w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-10 mb-10">
                <div className="flex flex-col mb-10">
                  <div className="mb-2">
                    <label htmlFor="address" className="text-slate-700">
                      Institute address
                    </label>
                    <span className="text-amber-500"> *</span>
                  </div>
                  <input
                    type="text"
                    id="address"
                    onChange={handleChange}
                    value={formData.address}
                    placeholder="Enter address"
                    className="w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm"
                    required
                  />
                </div>

                <div className="flex flex-col mb-10">
                  <div className="mb-2">
                    <label htmlFor="upiid" className="text-slate-700">
                      UPI ID
                    </label>
                    <span className="text-amber-500"> *</span>
                  </div>
                  <input
                    type="text"
                    id="upiid"
                    onChange={handleChange}
                    value={formData.upiid}
                    placeholder="Enter UPI ID"
                    className="w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-10 mb-10">
                <div className="flex flex-col mb-5">
                  <div className="mb-2">
                    <label htmlFor="password" className="text-slate-700">
                      Create a password
                    </label>
                    <span className="text-amber-500"> *</span>
                  </div>
                  <input
                    type="password"
                    id="password"
                    onChange={handleChange}
                    value={formData.password}
                    placeholder="Enter your password"
                    className="w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm"
                    required
                  />
                </div>

                <div className="flex flex-col mb-5">
                  <div className="mb-2">
                    <label htmlFor="confirmPassword" className="text-slate-700">
                      Confirm password
                    </label>
                    <span className="text-amber-500"> *</span>
                  </div>
                  <input
                    type="password"
                    id="confirmPassword"
                    onChange={handleChange}
                    value={formData.confirmPassword}
                    placeholder="Confirm password"
                    className="w-64 rounded-md h-10 border border-slate-200 outline-none px-2 text-sm"
                    required
                  />
                </div>
              </div>

              <button type="submit" className='w-28 h-10 mb-20 flex justify-center items-center rounded-md bg-amber-500 hover:bg-teal-500 cursor-pointer'>
                <span className='font-semibold text-white cursor-pointer'>REQUEST</span>
              </button>  
            </form>
            <h1 className='hover:underline hover:decoration-teal-500'><a href="/admin-login">Already Registered? Click here</a></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
