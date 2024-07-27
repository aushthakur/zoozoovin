import React, { useState } from 'react';
import image from '../img/Cards.png';
import playwin from '../img/black.png';
import ludo from '../img/PLAYWIN (4).png';
import patti from '../img/PLAYWIN (3).png';

const games = [
  {
    id: 1,
    title: 'PATTI KING',
    imgSrc: patti,
    description: 'Patti King Game Description.',
  },
  {
    id: 2,
    title: 'PLAY WIN',
    imgSrc: playwin,
    description: 'A skill Based Game depended on placing bets by analyzing result history to win tournaments.',
  },
  {
    id: 3,
    title: 'LUDO KING',
    imgSrc: ludo,
    description: 'Ludo King Game Description.',
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
    margin: '8px', // Reduced margin for smaller screens
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
    <div
      className="relative  md:bg-contain  sm:bg-contain sm:bg-no-repeat md:bg-repeat sm:h-60 sm:w-full bg-center md:min-h-screen md:overflow-hidden flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${image})`,
        margin: 0, // Ensure no margin around the background image
        padding: 0, // Ensure no padding around the background image
        
      }}
    >
      <h1 className="text-2xl md:text-6xl italic font-bold md:mt-1 sm:mt-4 text-white">ALL ZOOZOOWIN GAMES</h1>
      <div className="flex md:mt-28 sm:mt-4 sm:gap-0 md:w-full md:justify-center md:bg-center sm:w-80 md:gap-9">
        {games.map((game, index) => (
          <div
            className="md:items-center"
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
              className="md:rounded-2xl sm:rounded-lg shadow-lg mb-1 lg:w-full md:w-96 sm:w-2/3 -mr-1 md:mr-4"
              style={{ maxWidth: '150px' }}
            />
            <h2 className="sm:text-[12px] md:text-2xl font-bold text-white">{game.title}</h2>
          </div>
        ))}
      </div>
      <div className="sm:text-center mb-1">
        <h2 className="sm:text-[15px] md:text-4xl font-bold text-white md:mt-36">{games[activeIndex].title} GAME</h2>
        <p className="sm:text-[8px] md:text-xl text-white sm:mb-3">{games[activeIndex].description}</p>
      </div>
    </div>
  );
};

export default GameCard;
