import React from 'react';
import bgImage from '../img/bg2.png'; // Background image
import phoneImage from '../img/phone.png'; // Phone image
import androidButtonImage from '../img/download.png'; // Android download button image

const DownloadSection = () => {
  return (
    <div
      className=" bg-cover bg-no-repeat bg-center sm:h-[570px] md:min-h-screen w-full flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})`, padding:'2px' }}
    >
      <div className=" mx-auto px-4 sm:mt-44 flex flex-col md:flex-row items-center justify-between">
        {/* Left Image Section */}
        <div className="m-1 md:mb-0 md:w-1/2  sm:w-full md:h-auto sm:h-full sm:mb-6 flex justify-center">
          <img src={phoneImage} alt="Phone" className="w-full h-full  md:mb-48 object-contain" />
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2  text-center md:text-left mb-60">
          <h1 className="sm:text-[19px] md:text-4xl font-bold text-white mb-2 sm:mb-1">
            DOWNLOAD THE ZOOZOOWIN APP
          </h1>
          <ul className="text-white textarea-xs text-[10px] md:text-base mb-4 sm:mb-1 ">
            <li>Play 100+ exciting games on 12 different languages</li>
            <li>Withdraw Your Winnings Instantly in a Single Click like UPI, Paytm</li>
            <li>Truly Best Gaming Platform with 20 CR+ live players all over India</li>
          </ul>
          <div className="flex justify-center md:justify-start">
            <img
              src={androidButtonImage}
              alt="Download Android App"
              className="rounded-md w-32 mt-5  md:w-40 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
