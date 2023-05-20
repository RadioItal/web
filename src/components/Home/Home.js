import React from 'react';
import Footer from '../Footer/Footer.jsx';
import StreamingPlayer from '../Player/StreamingPlayer.js';

const HomePage = () => {
  return (
    <div className="home-page">
      
      <h1>Radio Ital</h1>
      <StreamingPlayer streamUrl="https://cast4.my-control-panel.com/proxy/radioita/stream" />
      <Footer />
    </div>
  );
};

export default HomePage;
