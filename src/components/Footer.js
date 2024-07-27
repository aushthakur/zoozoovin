import React from 'react';
import image from '../img/ZOOZOOWIN.png';
import payment from '../img/withdrawalPartner_footer.webp';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className=" bg-black text-white py-4">
      {/* Desktop View */}
      <div className=" hidden md:flex  ">
        {/* First Div */}
        <div className="max-w-2xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-2 text-slate-200 ">GAMES</h3>
            <ul>
              <li>PLAY WIN</li>
              <li>PATTI KING</li>
              <li>LUDO KING</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-slate-200">BONUS POLICIES</h3>
            <ul>
              <li>REFER & EARN</li>
              <li>SPIN WHEEL</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-slate-200">TERMS & CONDITIONS</h3>
            <ul>
              <li>PRIVACY POLICY</li>
              <li>RESPONSIBLE GAMING POLICY</li>
              <li>FAIRPLAY POLICY</li>
              <li>COMMUNITY GUIDELINES</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-slate-200">ABOUT US</h3>
            <ul>
              <li>REFER AND EARN</li>
              <li>DOWNLOAD APP</li>
            </ul>
          </div>
        </div>

        {/* Second Div */}
        <div className="max-w-5xl mx-auto px-4 mt-4 flex flex-col items-center">
          <img src={image} alt="ZooZooWin Logo" className="mb-2 w-80 h-auto" />
          <div className='flex gap-10 px-7 mb-6'>
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF size={32} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram size={32} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaYoutube size={32} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter size={32} />
            </a>
          </div>
          <div className="flex flex-wrap justify-center items-center mb-2">
            <img src={payment} alt="Payment Partners" className="w-72 h-auto" />
          </div>
        </div>

        {/* Third Div */}
        <div className="max-w-sm mx-auto px-4 mt-4 text-center text-sm text-gray-400">
          <p className="font-semibold text-left">DISCLAIMER</p>
          <p className="mt-2 text-left">
            This game may be habit-forming or financially risky. Play responsibly. ZOOZOOWIN is the biggest social gaming app in India by number of games, languages and exciting formats on the platform. ZOOZOOWIN is only available for people who are above 18 years of age. ZOOZOOWIN is available only in those Indian states where skill gaming is allowed by regulations. ZOOZOOWIN Games Pvt. Ltd. is the sole owner of and reserves the right to “ZOOZOOWIN” trademark, logos, assets, content, information, etc. used in the website except the third party content. ZOOZOOWIN Games Pvt. Ltd. does not acknowledge the accuracy or reliability of third party content.
          </p>
          </div>
        
      </div>
      
      {/* Mobile View */}
      <div className="md:hidden grid grid-cols-1 gap-4 px-4">
        <div className='grid grid-cols-2 sm:text-[10px]'>
          <div>
          <h3 className="font-bold mb-1 text-slate-400">GAMES</h3>
          <ul>
            <li>PLAY WIN</li>
            <li>PATTI KING</li>
            <li>LUDO KING</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-1  text-slate-400">BONUS POLICIES</h3>
          <ul className='mb-2 sm:text'>
            <li>REFER & EARN</li>
            <li>SPIN WHEEL</li>
          </ul>
        </div>
        <div className='relative mt-3'>
          <h3 className="font-bold mb-1 text-slate-400">TERMS & CONDITIONS</h3>
          <ul>
            <li>PRIVACY POLICY</li>
            <li>RESPONSIBLE GAMING POLICY</li>
            <li>FAIRPLAY POLICY</li>
            <li>COMMUNITY GUIDELINES</li>
          </ul>
        </div>
        <div className='relative mt-3'>
          <h3 className="font-bold mb-1 text-slate-400">ABOUT US</h3>
          <ul>
            <li>REFER AND EARN</li>
            <li>DOWNLOAD APP</li>
          </ul>
        </div>
        </div>
        <div className="flex flex-col items-center">
          <img src={image} alt="ZooZooWin Logo" className="mb-2 w-60 h-auto" />
          <div className='flex gap-4 px-4 mb-4'>
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
          </div>
          <img src={payment} alt="Payment Partners" className="w-60 h-auto mb-4" />
        </div>
        <div className="text-center text-sm sm:text-[10px] text-gray-400">
          <p className="font-semibold">DISCLAIMER</p>
          <p className="mt-2 text-start">
            This game may be habit-forming or financially risky. Play responsibly. ZOOZOOWIN is the biggest social gaming app in India by number of games, languages and exciting formats on the platform. ZOOZOOWIN is only available for people who are above 18 years of age. ZOOZOOWIN is available only in those Indian states where skill gaming is allowed by regulations. ZOOZOOWIN Games Pvt. Ltd. is the sole owner of and reserves the right to “ZOOZOOWIN” trademark, logos, assets, content, information, etc. used in the website except the third party content. ZOOZOOWIN Games Pvt. Ltd. does not acknowledge the accuracy or reliability of third party content.
          </p>
        
          
        </div>
       
      </div>
      <p className="mt-4 sm:text-[10px] text-center">
            © 2024, ZOOZOOWIN All Right Reserved -
          </p>
    </footer>
  );
}

export default Footer;
