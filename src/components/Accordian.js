import React, { useState } from 'react';
import img from '../img/Accordion.png';

function Accordian() {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const items = [
    {
      id: 1,
      question: "Is Zoozoowin a safe social gaming platform?",
      answer: "Zoozoowin is an absolutely safe and secure social gaming platform which ensures that all the games listed on the platform are fair. We have enhanced levels of fraud detection mechanisms to restrict fraudulent play and/or players thereby making Zoozoowin a fair and safe platform for playing 100+ social interactive games."
    },
    {
      id: 2,
      question: "Can I pay-to-play on Zoozoowin?",
      answer: "Yes, Zoozoowin offers free-to-play as well as pay-to-play format for their users."
    },
    {
      id: 3,
      question: "How to deposit?",
      answer: "You can go to your Zoozoowin wallet and enter the amount to be added through the multiple payment options available on the platform."
    },
    {
      id: 4,
      question: "How can a player credit their winnings?",
      answer: "A player, after verification, can withdraw their winnings on Zoozoowin through its withdrawal partners, namely- PayTM, Google Pay, PhonePe, UPI or directly to the linked bank account."
    },
    {
      id: 5,
      question: "Will my winnings get credited immediately?",
      answer: "Yes, the winnings are credited to your Zoozoowin wallet or linked bank account immediately. If due to any fraud detection, your winnings are not credited, please wait for 24 hours. If the winnings have not been credited even after 24 hours, please contact our customer support teams."
    }
  ];

  return (
    <>
      <div
        className="   bg-no-repeat sm:bg-contain md:bg-cover py-0 bg-[#050069]  overflow-hidden"
        style={{
          backgroundImage: `url(${img})`,
          // backgroundSize: 'cover',
         
         
        }}
      >
        <div className=" px-3 py-1   sm:mt-9 md:mt-32 md:mb-9 md:ml-9 sm:ml-0 grid grid-cols-1 w-full sm:grid-cols-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="collapse collapse-plus w-full md:w-1/2 md:ml-80  border-white border-[2px] mb-1"
            >
              <input
                type="checkbox"
                id={`radio-${item.id}`}
                checked={openItem === item.id}
                onChange={() => handleToggle(item.id)}
                className="hidden "
              />
              <label
                htmlFor={`radio-${item.id}`}
                className="collapse-title bg-white text-black sm:text-[14px] md:text-xl text-md font-medium py-0 px-3 flex justify-between items-center cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="w-7 h-7 rounded-full  bg-black text-white flex items-center justify-center mr-2">
                    {item.id}
                  </div>
                  <span>{item.question}</span>
                </div>
                <div className="text-2xl">
                  {openItem === item.id ? '' : ''}
                </div>
              </label>
              {openItem === item.id && (
                <div className="bg-white sm:text-[12px] md:text-xl text-black collapse-content px-4 py-2">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Accordian;
