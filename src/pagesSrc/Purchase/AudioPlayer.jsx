import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { ImVolumeMedium } from 'react-icons/im';
// import styles from './reviewbeat.module.scss';

function AudioPlayer() {
  //States
  const [play, setPlay] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(50);
  const [showVolume, setShowVolume] = useState(false);

  //References
  const audioPlayer = useRef(); //audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation
  const volumeBar = useRef(); // reference the animation

  //Effect
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  // Effect to make default volume 50%
  useEffect(() => {
    audioPlayer.current.volume = 50 / 100;
  }, []);

  //Calculate time function
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  //Toggle pause/play
  const togglePlay = () => {
    setPlay(!play);
    if (play) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  //upadate current time element and progress bar
  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  // Volume onchange function
  const changeVolume = () => {
    audioPlayer.current.volume = volumeBar.current.value / 100;
    setVolume(audioPlayer?.current?.volume * 100);
  };

  // Show and hide volume slider
  const toggleVolumeSlider = () => {
    setShowVolume(!showVolume);
  };

  //Progress bar functions
  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      '--seek-before-width',
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  return (
    <div className='py-2.5 px-4 mt-10'>
      <audio
        src='http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3'
        preload='metadata'
        ref={audioPlayer}
      >
        <track kind='captions' />
      </audio>
      <div className='flex items-center gap-[1.125rem]'>
        {play && (
          <div
            className='flex p-[0.6rem] justify-center items-center rounded-s-full'
            onClick={togglePlay}
            aria-hidden='true'
          >
            <FaPlay size={12} />
          </div>
        )}
        {!play && (
          <div className='flex' onClick={togglePlay} aria-hidden='true'>
            <FaPause size={12} />
          </div>
        )}
        <div className='text-xl text-white'>{calculateTime(currentTime)}</div>
        <div>
          <input
            type='range'
            defaultValue='0'
            ref={progressBar}
            onChange={changeRange}
            className='bg-secondary appearance-none rounded-2xl relative w-full h-2 outline-none'
          />
        </div>
        <div className='relative'>
          <div onClick={toggleVolumeSlider}>
            <ImVolumeMedium color='#fff' size={20} />
          </div>
          {showVolume && (
            <input
              type='range'
              id='volumeslider'
              max='100'
              ref={volumeBar}
              value={volume}
              onChange={changeVolume}
              className='transform rotate-270 absolute right-4 top-0 w-20'
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
