import React from 'react';
import epay6 from "../assets/epay-image-6.webp";
import payNow from "../assets/pay-now-icon.svg";
import learnMore from "../assets/pay-now-icon2.svg";
import security from "../assets/user-shield-solid.svg"
import handshake from "../assets/handshake-simple-solid.svg"
import creditCard from "../assets/credit-card-solid.svg"
import welcome from "../assets/e-pay-welcome.jpg"

const Home = () => {
  return (
    <>
      <div className="section overflow-x-hidden relative w-screen">
        <div className="h-1/2 md:h-screen w-screen relative">
          <img
            src={epay6}
            alt=""
            className="w-full h-[500px] md:h-screen object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
          <div className="absolute h-1/2 md:h-screen w-full md:w-1/2 top-28 md:top-56 md:left-32 text-white flex flex-col justify-center md:block pl-5">
            <p className="font-semibold text-sm md:text-xl text-teal-500">
              Secure Online Payments
            </p>
            <h1 className="font-extrabold text-4xl md:text-7xl leading-tight tracking-tight">
              Digital Admissions for a Smarter Tomorrow
            </h1>
            <div className="flex gap-3 mt-10">
              <div className="font-bold bg-teal-400 rounded-md flex justify-evenly items-center h-12 w-40 hover:bg-amber-600 cursor-pointer">
                <img src={payNow} className="h-4 w-10 md:w-4" alt="" />
                <h1 className="text-sm mr-6">PAY NOW</h1>
              </div>
              <div className="font-bold bg-white text-teal-400 rounded-md flex justify-evenly items-center h-12 w-40 hover:bg-amber-600 cursor-pointer">
                <img src={learnMore} className="h-4 w-10 md:w-4 " alt="" />
                <h1 className="text-sm mr-4">LEARN MORE</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}

        <div className='absolute w-full h-full block md:flex justify-evenly px-4 lg:px-7 top-[480px] md:top-[780px] overflow-x-hidden'>
        <div className='bg-white h-56 mb-7 md:w-1/4 drop-shadow-2xl rounded-md overflow-hidden'>
        <div className='h-2/5 flex gap-6 items-end'>
          <img src={security} alt="" className='h-16 w-16 ml-8 md:h-12 md:w-12 lg:h-16 lg:w-16'/>
          <h1 className='text-xl md:text-lg md:mb-0 lg:text-xl lg:mb-5 font-bold text-slate-700 mb-5'>Security Features</h1>
        </div>
          <p className='mt-3 px-8 md:text-sm lg:text-base'>At ePAY, we prioritize the safety and security of your personal and financial information.</p>
        </div>
        <div className='bg-white h-56 mb-7 md:w-1/4 drop-shadow-2xl rounded-md overflow-hidden'>
        <div className='h-2/5 flex gap-6 items-end'>
          <img src={handshake} alt="" className='h-16 w-16 ml-8 md:h-12 md:w-12 lg:h-16 lg:w-16'/>
          <h1 className='text-xl md:text-lg md:mb-0 lg:text-xl lg:mb-5 font-bold text-slate-700 mb-5'>Ease of Use</h1>
        </div>
          <p className='mt-3 px-8 md:text-sm lg:text-base'>We believe that paying for services should be simple, fast, and convenient.</p>
        </div>
        <div className='bg-white h-56 mb-7 md:w-1/4 drop-shadow-2xl rounded-md overflow-hidden'>
        <div className='h-2/5 flex gap-6 items-end'>
          <img src={creditCard} alt="" className='h-16 w-16 ml-8 md:h-12 md:w-12 lg:h-16 lg:w-16'/>
          <h1 className='text-xl md:text-lg md:mb-0 lg:text-xl lg:mb-1 font-bold text-slate-700 sm:mb-1 mb-5'>Multiple Payment Methods</h1>
        </div>
          <p className='mt-3 px-8 md:text-sm lg:text-base'>UPI, credit/debit cards, digital wallets, or other payment options, we’ve got you covered.</p>
        </div>
      </div>

      {/* Welcome */}

      <div className='h-[700px] w-screen display flex pt-60'>
        <div className='w-1/2 h-[700px] border border-red-500 pl-7 flex justify-center items-center overflow-x-hidden'>
          <img src={welcome} alt="" className='h-3/4'/>
        </div>
        <div className='w-1/2 h-[700px] border border-blue-500 flex flex-col justify-center pr-36 overflow-x-hidden'>
          <h1 className='bg-yellow-200 w-20 h-6 flex justify-center items-center text-amber-600 font-medium rounded-md text-xs'>WELCOME!</h1>
          <h1 className='text-4xl text-teal-500 mt-8 font-bold leading-snug tracking-tight'>Make Payments Anytime, Anywhere, at Your Convenience and Time.</h1>
          <hr className='w-52 border-2 mt-6'/> 
          <p className='mt-10 text-slate-600 tracking-wide leading-relaxed'>Whether it's during a busy workday or late at night, our platform allows you to make payments anytime and anywhere. We believe in offering flexibility, ensuring you never have to worry about timing when managing your payments.</p>
        </div>
      </div>

      </div>
    </>
  );
};

export default Home;
