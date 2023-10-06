import React from 'react';
import Footer from '../Footer/Footer.jsx';
import Slider from './Slider';



const HomePage = () => {
  
  const slides = [
    { image: 'https://radioital.com/app/img/slide_1.791b360.jpg', alt: 'Image 1' },
    { image: 'https://radioital.com/app/img/slide_2.4baea67.jpg', alt: 'Image 2' },
    { image: 'https://radioital.com/app/img/slide_3.946801c.jpg', alt: 'Image 3' }
  ];

  return (
    <div className="home-page">
        <div className="home-content">
        <div className="home-chat">
          <Slider slides={slides} autoSlideDelay={3000} />
          <Footer />
        </div>
        </div>
      </div>
  );
};

export default HomePage;
