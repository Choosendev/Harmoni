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

  // //References
  // const audioPlayer = useRef(); //audio component
  // const progressBar = useRef(); // reference our progress bar
  // const animationRef = useRef(); // reference the animation
  // const volumeBar = useRef(); // reference the animation

  // //Effect
  // useEffect(() => {
  //   const seconds = Math.floor(audioPlayer.current.duration);
  //   setDuration(seconds);
  //   progressBar.current.max = seconds;
  // }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  // // Effect to make default volume 50%
  // useEffect(() => {
  //   audioPlayer.current.volume = 50 / 100;
  // }, []);

  // //Calculate time function
  // const calculateTime = (secs) => {
  //   const minutes = Math.floor(secs / 60);
  //   const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  //   const seconds = Math.floor(secs % 60);
  //   const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  //   return `${returnedMinutes}:${returnedSeconds}`;
  // };

  // //Toggle pause/play
  // const togglePlay = () => {
  //   setPlay(!play);
  //   if (play) {
  //     audioPlayer.current.play();
  //     animationRef.current = requestAnimationFrame(whilePlaying);
  //   } else {
  //     audioPlayer.current.pause();
  //     cancelAnimationFrame(animationRef.current);
  //   }
  // };

  // //upadate current time element and progress bar
  // const whilePlaying = () => {
  //   progressBar.current.value = audioPlayer.current.currentTime;
  //   changePlayerCurrentTime();
  //   animationRef.current = requestAnimationFrame(whilePlaying);
  // };

  // // Volume onchange function
  // const changeVolume = () => {
  //   audioPlayer.current.volume = volumeBar.current.value / 100;
  //   setVolume(audioPlayer?.current?.volume * 100);
  // };

  // // Show and hide volume slider
  // const toggleVolumeSlider = () => {
  //   setShowVolume(!showVolume);
  // };

  // //Progress bar functions
  // const changeRange = () => {
  //   audioPlayer.current.currentTime = progressBar.current.value;
  //   changePlayerCurrentTime();
  // };

  // const changePlayerCurrentTime = () => {
  //   progressBar.current.style.setProperty(
  //     '--seek-before-width',
  //     `${(progressBar.current.value / duration) * 100}%`
  //   );
  //   setCurrentTime(progressBar.current.value);
  // };

  return (
    <div className='py-2.5 mt-10'>
      <div className='holder flex flex-col items-center'>
        <div className='audio green-audio-player flex shadow-[0 4px 16px 0 rgba(0, 0, 0, 0.07)] justify-between items-center cursor-pointer min-w-[270px] w-full h-[56px] bg-white px-4 rounded'>
          <div className='loading'>
            <div className='spinner '></div>
          </div>
          <div className='play-pause-btn cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='24'
              viewBox='0 0 18 24'
            >
              <path
                fill='#566574'
                fill-rule='evenodd'
                d='M18 12L0 24V0'
                className='play-pause-icon'
                id='playPause'
              />
            </svg>
          </div>

          <div className='controls text-[#55606e] flex grow justify-between items-center'>
            <span className='current-time cursor-default'>0:00</span>
            <div
              className='slider grow relative bg-[#d8d8d8] rounded-sm h-1'
              data-direction='horizontal'
            >
              <div className='progress bg-[#44bfa3] absolute pointer-events-none h-full w-0'>
                <div
                  className='pin h-4 w-4 rounded-lg bg-[#44bfa3] absolute pointer-events-auto shadow-[0px 1px 1px 0px rgba(0, 0, 0, 0.32)] -right-2 -top-1.5'
                  id='progress-pin'
                  data-method='rewind'
                ></div>
              </div>
            </div>
            <span className='total-time'>0:00</span>
          </div>

          <div className='volume relative'>
            <div className='volume-btn cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path
                  fill='#566574'
                  fill-rule='evenodd'
                  d='M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z'
                  id='speaker'
                />
              </svg>
            </div>
            <div className='volume-controls hiidden w-[30px] h-[135px] bg-[rgba(0, 0, 0, 0.62)] rounded-lg absolute -left-[3px] bottom-[52px] flex flex-col  item-center'>
              <div
                className='slider my-3 w-1.5 rounded-[3px]'
                data-direction='vertical'
              >
                <div className='progress bottom-0 h-full w-[6px] '>
                  <div
                    className='pin -left-[5px] top-2'
                    id='volume-pin'
                    data-method='changeVolume'
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <audio crossorigin>
            <source
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3'
              type='audio/mpeg'
            />
          </audio>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
