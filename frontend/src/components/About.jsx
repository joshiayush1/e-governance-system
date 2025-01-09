import React from "react";

const About = () => {
  return (
    <div className="pt-24 w-screen h-full">
      <h1 className="text-center text-amber-500 text-xl font-bold mt-10 mb-10">
        About ePAY
      </h1>
      <div className="w-full h-full flex justify-center items-center ">
        <div className="px-5 md:px-0 md:w-1/2 text-slate-700">
        <p>
          ePAY is an innovative e-governance payment platform designed to
          simplify financial transactions between educational institutions and
          students. The platform provides a secure and efficient way for
          institutions to collect fees, manage payments, and offer a smooth
          financial experience for students. 
          
          <br />
          <br />
          
          For institutions, ePAY serves as a
          comprehensive tool for fee management, offering real-time tracking,
          easy integration with existing systems, and secure payment gateways.
          Institutions can effortlessly handle payments for tuition,
          accommodation, and other services, ensuring transparency and accuracy
          in every transaction.
         
          <br />
          <br />
         
          For students, ePAY offers a user-friendly
          interface to manage their payments, view fee structures, and track
          their financial history. With options for online payment and easy
          access to receipts, students can pay fees with convenience and
          confidence, knowing that their transactions are secure.
          
          <br />
          <br />

          ePAY bridges
          the gap between educational institutions and students, making fee
          management and payments hassle-free and efficient for everyone
          involved.
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
