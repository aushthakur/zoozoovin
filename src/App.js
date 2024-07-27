import React, { useState, useEffect } from 'react';
import './index.css';
import modalImage from './img/modalimage.png';
import Modal from '../src/components/Modal';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Hero2 from '../src/components/Hero2';
import Hero3 from '../src/components/Hero3';
import Video from '../src/components/Video';
import Card from '../src/components/Cards';
import Card2 from '../src/components/Card2';
import Footer from '../src/components/Footer';
import Accordian from './components/Accordian';


const App = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='bg-white'>
      <Navbar />
      <Modal showModal={showModal} closeModal={closeModal} imageSrc={modalImage} />
      {/* Other components */}
      <Hero/>
      <Hero2/>
      <Card/>
      <Video/>
      <Card2/>
      <Hero3/>
      <Accordian/>
      <Footer/>
    </div>
  );
};

export default App;
