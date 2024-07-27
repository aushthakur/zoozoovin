import React from 'react';
import bg from '../img/hero2.png';
import supportImg from '../img/support.png';
import withdrawalImg from '../img/withdrawal.png';
import androidImg from '../img/android.png';
import languageImg from '../img/language.png';
import noBotsImg from '../img/no bot.png';
import secureImg from '../img/secure.png';
import mobileImg1 from '../img/bot.png';
import mobileImg2 from '../img/android1.png';
import mobileImg3 from '../img/securem.png';
import mobileImg4 from '../img/supportm.png';

const services = [
  { name: 'Support', point: '24 x 7 support', img: supportImg },
  { name: 'Withdrawal', point: 'easy and instant withdrawal', img: withdrawalImg },
  { name: 'Android', point: 'Available on Android', img: androidImg },
  { name: 'Language', point: 'Multiple languages supported', img: languageImg },
  { name: 'No Bots', point: 'No bot gameplay involved', img: noBotsImg },
  { name: 'Secure', point: '100% trusted and secure', img: secureImg },
];

const mobileImages = [
  { img: mobileImg1, name: 'NoBots', point: 'No bot gameplay involved' },
  { img: mobileImg2, name: 'Android', point: 'Available on Android' },
  { img: mobileImg3, name: 'Secure', point: '100% trusted and secure' },
  { img: mobileImg4, name: 'Support', point: '24 x 7 support' },
];

const HeroSection = () => {
  return (
    <div className="relative bg-contain bg-no-repeat w-full" style={{ backgroundImage: `url(${bg})` }}>
      <div className="text-3xl md:text-6xl text-[#430645] italic font-bold flex flex-col text-center justify-center py-8">
        <h1 className="md:mt-4">WHY ZOOZOOWIN</h1>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
        {services.map((service, index) => (
          <div key={index} className="ml-10 md:p-3 w-4/5 md:w-3/4">
            <div className="bg-[#430645] shadow-2xl italic rounded-md flex items-center p-0">
              <img src={service.img} alt={service.name} className="md:w-24 h-20 md:h-auto md:mr-4" />
              <div>
                <span className="text-2xl md:text-5xl text-white ml-2 font-bold">{service.name}</span>
                <span className="block text-white ml-2 text-xs md:text-lg">{service.point}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex justify-center mb-6
      ">
        <div className="flex flex-wrap justify-center mb-6">
          {mobileImages.map((service, index) => (
            <div key={index} className="w-1/4 p-4">
              <div className="bg-[#430645] shadow-2xl italic w-16 h-16 rounded-full flex flex-col items-center p-4">
                <img src={service.img} alt={`Mobile ${index + 1}`} className="w-32 h-32 mb-2" />
                <span className="text-sm text-white rounded-md bg-[#430645] mt-3 font-bold p-2 text-center">{service.name}</span>
                {/* <span className="text-[8px] text-black rounded-md mt-3 p-2 text-center">{service.point}</span> */}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
