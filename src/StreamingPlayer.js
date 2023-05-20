import React, { useState, useEffect, useRef } from 'react';

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
        <>
          <div className="metadata">{metadata}</div>
          {streamDetails && (
            <div className="stream-details">
              <div>Artist: {streamDetails.track.artist}</div>
              <div>Title: {streamDetails.track.title}</div>
              <div>Album: {streamDetails.track.album}</div>
              <div>Listeners: {streamDetails.listeners}</div>M
            </div>
          )}
        </>
      )}
      <audio
        ref={audioRef}
        src={streamUrl}
        onEnded={handleAudioEnded}
      ></audio>
      <div className="controls">
        <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
        <div className="volume">{`Volume: ${Math.round(volume * 100)}%`}</div>
      </div>
    </div>
  );
};


export default CentovaStreamingPlayer;
