import React, { useState } from 'react';
import image from '../img/background.png';
import playwin from '../img/1.png';
import ludo from '../img/2.png';
import patti from '../img/3.png';
import Step4 from '../img/4.png';
import Step5 from '../img/5.png'
import Step6 from '../img/6.png'

const games = [
  {
    id: 1,
    title: 'Step 1',
    imgSrc: ludo,
    description: 'Click on “Download” button to download the Application',
  },
  {
    id: 2,
    title: 'Step 2',
    imgSrc: playwin,
    description: 'Check your phone notification to find the downloaded app',
  },
  {
    id: 3,
    title: 'Step 3',
    imgSrc: patti,
    description: 'Click on “Install” button to begin installation of the Application',
  },
];

const GameCard = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const cardStyle = (index) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transform: index === activeIndex ? 'scale(1.1)' : 'scale(0.9)',
    zIndex: index === activeIndex ? 10 : 0,
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
    margin: '10px', // Reduced margin for smaller screens
    padding: '10px', // Added padding for better spacing
  });

  const handleMouseEnter = (index) => {
    if (index === activeIndex) {
      document.getElementById(`card-${index}`).style.transform = 'scale(1.2)';
    }
  };

  const handleMouseLeave = (index) => {
    if (index === activeIndex) {
      document.getElementById(`card-${index}`).style.transform = 'scale(1.1)';
    }
  };

  return (
    <>
    <div
      className="bg-cover bg-center  bg-no-repeat md:h-screen  overflow-hidden  flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${image})`,
       
      }}
    >
      <div className="text-3xl md:text-6xl italic md:block sm:hidden font-bold mt-40 text-white">
        
        <h1 className='mb-16 text-7xl block'>HOW TO INSTALL</h1></div>
      <div className="flex mt-10 gap-0  md:gap-7 ">
        {games.map((game, index) => (
          <div
            key={game.id}
            id={`card-${index}`}
            style={cardStyle(index)}
            onClick={() => setActiveIndex(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img
              src={game.imgSrc}
              alt={game.title}
              className="rounded-2 md:block sm:hidden shadow-lg w-full mb-4"
              style={{ maxWidth: '120px' }}
            />
            <h2 className="text-base md:text-xl sm:hidden md:block font-bold text-white">{game.title}</h2>
          </div>
        ))}
      </div>
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl sm:hidden md:block font-bold text-white">{games[activeIndex].title}</h2>
        <p className="text-base md:text-lg sm:hidden md:block text-white mt-2">{games[activeIndex].description}</p>
      </div>

      <div className='md:hidden sm:block text-center font-bold  text-white text-3xl'><h1 className='mb-12 text-4xl italic'>How To Download</h1>
      <div className="carousel carousel-center bg-neutral md:hidden mb-16 rounded-box bg-transparent max-w-md space-x-4 p-4">
  <div className="carousel-item flex w-1/2 flex-col ">
    <img
      src={playwin}
      className="rounded-box" />
      <h1>Step-1</h1>
  </div>
  
  <div className="carousel-item flex w-1/2 flex-col">
    <img
      src={patti}
      className="rounded-box" />
      <h1>Step-2</h1>
  </div>
  <div className="carousel-item flex w-1/2 flex-col">
    <img
      src={ludo}
      className="rounded-box" />
      <h1>Step-3</h1>
  </div>
  <div className="carousel-item flex w-1/2 flex-col">
    <img
      src={Step4}
      className="rounded-box" />
      <h1>Step-4</h1>
  </div>
  <div className="carousel-item flex w-1/2 flex-col">
    <img
      src={Step5}
      className="rounded-box" />
      <h1 className=''>Step-5</h1>
  </div>
  <div className="carousel-item flex w-1/2 flex-col">
    <img
      src={Step6}
      className="rounded-box" />
      <h1 className=''>Step-5</h1>
  </div>
  
 
</div>
</div>
    </div>
    {/* mobileb */}
    
    </>
  );
};

export default GameCard;
