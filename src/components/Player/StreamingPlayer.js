import React, { useState, useEffect, useRef } from 'react';
import '../Player/Player.css';
import MiniPlayer from '../Player/MiniPlayer';

const CentovaStreamingPlayer = ({ streamUrl }) => {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [metadata, setMetadata] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamDetails, setStreamDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://cast4.asurahosting.com/rpc/radioita/streaminfo.get/');
        if (response.ok) {
          const data = await response.json();
          const song = data?.data?.[0]?.song;
          if (song) {
            const [artist, title] = song.split(' - ');
            setMetadata(`${artist} - ${title}`);
          } else {
            setMetadata('Loading...');
          }
          setIsLoading(false);
          setStreamDetails(data?.data?.[0]);
        } else {
          setMetadata('Error fetching metadata');
          setIsLoading(false);
        }
      } catch (error) {
        setMetadata('Error fetching metadata');
        setIsLoading(false);
      }
    };

    fetchData(); // Fetch metadata initially
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }, [isPlaying]);

  const handleVolumeChange = (event) => {
  const value = parseFloat(event.target.value);
  setVolume(value);
  audioRef.current.volume = value;

  // Calculate the slider position as a percentage
  const position = (value * 100).toFixed(0);
  
  // Set the CSS variable to control the background gradient
  event.target.style.setProperty('--slider-position', position + '%');
};

  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      setIsPlaying(true);
      audioRef.current.play();
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    audioRef.current.currentTime = 0;
  };

  return (
    <div className="centova-streaming-player">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="container">
          <div className="image-placeholder">
            <img src="src/assets/images/long_play618a965.svg" alt="Placeholder" />
            <p>Nombre Programa o Franja</p>
          </div>
          <div className="metadata-container">
            <div className="metadata">{metadata}</div>
            {streamDetails && (
              <div className="stream-details">
                <div>Artista: {streamDetails.track.artist}</div>
                <div>Album: {streamDetails.track.album}</div>
                <div>Oyentes: {streamDetails.listeners}</div>
              </div>
            )}
          </div>
          <div className="controls-container">
          <div className="controls">
          <button onClick={handlePlayPause}>
  {isPlaying ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 45 45"
    >
      <path d="M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="currentColor"
      viewBox="0 0 45 45"
    >
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM13 8V16H15V8H13ZM9 8V16H11V8H9Z" fill="black"></path>
    </svg>
  )}
</button>


  {/* Add other control buttons here */}
</div>

            <div className="volume-control">
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
              />
              <div className="volume"><svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-play-fill"
        viewBox="0 0 45 45"
      >
       <path d="M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z"></path>
      </svg></div>
            </div>
          </div>
        </div>
      )}
      <audio ref={audioRef} src={streamUrl} onEnded={handleAudioEnded}></audio>
    </div>
  );
};

export default CentovaStreamingPlayer;
