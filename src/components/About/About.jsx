import React from 'react';
import StreamingPlayer from '../components/Player/CentovaStreamingPlayer';
import Miniplayer from '../components/Player/MiniPlayer';

const About = () => {
  return (
    <div>
      {/* Your About page content */}
      <StreamingPlayer streamUrl="https://cast4.my-control-panel.com/proxy/radioita/stream" />
      <Miniplayer />
    </div>
  );
};

export default About;
