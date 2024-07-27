import React, { useState } from 'react';
import bg from '../img/Video.png';

function Vedio() {
  const videos = [
    {
      title: 'When Life Gives You Lemons',
      src: 'https://www.youtube.com/embed/HbNfCM4ilBQ',
      thumbnail: 'https://i.ytimg.com/vi/HbNfCM4ilBQ/hqdefault.jpg',
    },
    {
      title: 'Ludo Mein Drinks Break',
      src: 'https://www.youtube.com/embed/k3ijQJjUbTs',
      thumbnail: 'https://i.ytimg.com/vi/k3ijQJjUbTs/hqdefault.jpg',
    },
    {
      title: 'When Life Gives You Lemons',
      src: 'https://www.youtube.com/embed/k3ijQJjUbTs',
      thumbnail: 'https://i.ytimg.com/vi/k3ijQJjUbTs/hqdefault.jpg',
    },
    {
      title: 'Ludo Mein Drinks Break',
      src: 'https://www.youtube.com/embed/gPpQNzQP6gE',
      thumbnail: 'https://i.ytimg.com/vi/gPpQNzQP6gE/hqdefault.jpg',
    },
    {
      title: 'Real Players Real Fun',
      src: 'https://www.youtube.com/embed/gPpQNzQP6gE',
      thumbnail: 'https://i.ytimg.com/vi/gPpQNzQP6gE/hqdefault.jpg',
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div
      className="relative bg-contain bg-no-repeat  md:w-full md:h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto p-1 md:p-12">
        <h1 className="text-center md:text-5xl md:mt-20 font-bold italic">TUTORIAL VIDEO</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          {/* Big Screen Video on Top for Small Screens, Left Side for Larger Screens */}
          <div className="md:col-span-2 relative rounded-lg shadow-md mb-4 md:mb-0">
            {selectedVideo && (
              <iframe
                src={selectedVideo.src}
                title={selectedVideo.title}
                className="w-full h-full aspect-video rounded-lg"
                allowFullScreen
              />
            )}
          </div>

          {/* 4 Videos on Bottom for Small Screens, Right Side for Larger Screens */}
          <div className="md:col-span-2 grid grid-cols-2 bg-transparent gap-4">
            {videos.slice(0, 4).map((video, index) => (
              <div
                key={index}
                className="relative rounded-lg shadow-md cursor-pointer"
                onClick={() => handleVideoClick(video)}
              >
                <img src={video.thumbnail} alt={video.title} className="rounded-lg w-full" />
                <div className="absolute bottom-0 left-0  bg-opacity-50 w-full py-2 px-4 text-white text-center rounded-b-lg">
                  {video.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vedio;
