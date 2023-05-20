import React from 'react';
import StreamingPlayer from './StreamingPlayer';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Radio Ital</h1>
      <StreamingPlayer streamUrl="https://cast4.my-control-panel.com/proxy/radioita/stream" />
    </div>
  );
};

export default HomePage;
