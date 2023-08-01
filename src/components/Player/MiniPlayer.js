import React from 'react';

const Miniplayer = ({ metadata, isPlaying, handlePlayPause }) => {
  return (
    <div className="miniplayer">
      <div className="miniplayer-metadata">{metadata}</div>
      <div className="miniplayer-controls">
        <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      </div>
    </div>
  );
};

export default Miniplayer;
