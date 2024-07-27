import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg1 from '../img/hero.jpg';
import bg2 from '../img/PLAYWIN (1).png';
import bg3 from '../img/mobileview.png';
import payment from '../img/withdrawalPartner_footer.webp';
import androidIcon from '../img/android_icon.png';
import downloadIcon from '../img/download_icon.png';
import apkFile from '../components/app-release.apk'; // Import the APK file
import Notification from "../components/notification"; // Import the Notification component

function HeroSection() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [notification, setNotification] = useState(null); // State for managing notification

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Phone number submitted:', phoneNumber);
  };

  const handleDownload = () => {
    setNotification("Your download is in progress...");
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = apkFile;
      link.download = "app-release.apk";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setNotification("Download started! Please follow steps to install.");
    }, 3000);
    
    // Hide the notification after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 6000); // 3 seconds for initial message + 3 seconds for download started message
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center w-full md:h-full">
      <ToastContainer /> {/* Ensure this is correctly placed */}
      {notification && (
        <Notification message={notification} onClose={closeNotification} />
      )}
      <img
        src={bg1}
        alt="Hero Background"
        className="lg:block md:block sm:hidden absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative ml-96 mb-14 z-10 flex flex-col items-center justify-end px-4">
        <div className="relative">
          <img
            src={bg2}
            alt="Daily Winning Banner"
            className="h-64 mb-6 mt-10 ml-96"
          />
        </div>

        <form onSubmit={handleSubmit} className="md:hidden sm:hidden ml-96 lg:block w-full max-w-md">
          <div className="items-center mb-20">
            <div className="flex items-center">
              <div className="relative flex gap-5 items-center">
                <div className="text-white bg-black px-3 ml-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  +91
                </div>
                <input
                  type="tel"
                  id="phone-number"
                  name="phone-number"
                  placeholder="ENTER 10 DIGIT MOBILE"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="text-white bg-black px-14 input-with-blinking-cursor py-2 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>
            </div>

            <button className="px-28 py-2 mt-3 ml-8 font-bold bg-gradient-to-b from-[#00FF0A] to-[#008A12] text-white rounded-md hover:from-green-300 hover:to-green-500 overflow-hidden">
              GET APP LINK SMS
            </button>
          </div>
        </form>
      </div>

      <div className="bg-[#430645] sm:hidden lg:block relative z-10 text-white flex flex-col items-center justify-center md:block px-4 w-full h-24">
        <div className="flex justify-around w-full mt-4 gap-6 max-w-7xl">
          <div className="text-center text-5xl italic">
            <h2 className="font-bold">10 LAKH</h2>
            <p className="text-xl">Registered Users</p>
          </div>
          <div className="text-center text-5xl italic">
            <h3 className="font-semibold">HIGH</h3>
            <p className="text-xl">Winnings</p>
          </div>
          <div className="text-4xl">|</div>
          <div className="text-center text-4xl italic">
            <h3 className="font-bold">WITHDRAWAL PARTNERS</h3>
            <img src={payment} alt="Payment Partners" className="w-96 h-auto mx-auto mt-2 mb-6" />
          </div>
        </div>
      </div>

      <img
        src={bg3}
        alt="Hero Background"
        className="lg:hidden sm:block absolute mb-24 object-cover"
      />
      <div className="bg-[#430645] md:block sm:block lg:hidden relative text-white items-center justify-end py-0 px-12 w-full h-40 mt-42">
        <div className="flex justify-around w-full italic gap-0 max-w-7xl">
          <div className="text-center py-3.5 relative">
            <button
              className="font-bold bg-gradient-to-b from-[#00FF0A] to-[#008A12] text-white py-2 px-10 rounded-lg flex ml-7 mt-3 relative overflow-hidden"
              onClick={handleDownload}
            >
              <img src={androidIcon} alt="Android" className="h-6 w-6 mr-2" />
              DOWNLOAD
              <img src={downloadIcon} alt="Download" className="h-6 w-6 ml-2" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-50 transform -rotate-45 -translate-x-full transition-transform duration-1000" style={{ animation: 'shine 3s infinite' }}></div>
            </button>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-purple-950 mt-4"></div>
            <h3 className="font-bold text-xl mt-1">Withdrawal Partners</h3>
            <img src={payment} alt="Payment Partners" className="w-96 h-auto mx-auto mt-1" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .rhombus-left {
          clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
        }

        .rhombus-right {
          clip-path: polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%);
        }

        .download-button {
          border-radius: 20px;
        }

        .download-button:before,
        .download-button:after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 10%;
          background: inherit;
          z-index: 1;
        }

        .download-button:before {
          left: 0;
          transform: skewX(-20deg);
          transform-origin: left;
        }

        .download-button:after {
          right: 0;
          transform: skewX(20deg);
          transform-origin: right;
        }

        .input-with-blinking-cursor {
          font-size: 16px; /* Adjust the font size as needed */
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

export default HeroSection;
