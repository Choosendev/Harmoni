import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import Image from 'next/image';
// import style from './carouselSlider.module.css';

const data = [
  {
    src: '/assets/images/carousel-bg.png',
    caption: 'San Francisco',
    producer: '@Zojaman',
    alternate: 'first producer',
  },
  {
    src: '/assets/images/carousel-bg.png',
    caption: 'Scotland',
    producer: '@Odiri',
    alternate: 'second producer',
  },
  {
    src: '/assets/images/carousel-bg.png',
    caption: 'Darjeeling',
    producer: '@Andrew',
    alternate: 'Third producer',
  },
  {
    src: '/assets/images/carousel-bg.png',
    caption: 'San Francisco',
    producer: '@monitech',
    alternate: 'Fourth producer',
  },
  {
    src: '/assets/images/carousel-bg.png',
    caption: 'Scotland',
    producer: '@emmeyz',
    alternate: 'fifth producer',
  },
  {
    src: '/assets/images/carousel-bg.png',
    caption: 'Darjeeling',
    producer: '@ZojaAkpamuman',
    alternate: 'sixth producer',
  },
];

const PopularUploads = () => {
  return (
    <div className='pb-11'>
      {/* CAROUSEL HERE */}
      {/* <div className='h-auto relative'> */}
      {/* <div className='w-full mx-auto max-w-xs sm:max-w-md'> */}
      <div className=''>
        <div className='mb-7'>
          <h2>Popular uploads</h2>
        </div>
        <div className=''>
          {/* <div className='w-full mx-auto max-w-xs'> */}
          <Splide
            aria-label='popular beats'
            options={{
              pagination: false,
              perPage: 2.5,
              arrows: false,
              //   perPage: 4,
              height: '15.5rem',
              rewind: true,
              //   gap: '14px',
              autoplay: true,
              pauseOnHover: true,
              //   resetProgress: false,
              type: 'loop',
              //   cover: true,
              start: 0,
              //   focus: 'center',
              mediaQuery: 'min',
              breakpoints: {
                768: {
                  perPage: 3,
                  gap: 24,
                },
                640: {
                  perPage: 3,
                },
                1024: {
                  perPage: 4,
                },
              },
              //   gap: '2em',
              //   updateOnMove: true,
            }}
            // className='w-full max-w-xs'
          >
            {data.map((item, idx) => (
              <SplideSlide key={idx} className='rounded-lg'>
                <Image
                  src={item.src}
                  alt={item.alternate}
                  className='rounded-lg'
                  width={159}
                  height={155}
                />
                <div className='absolute top-16 ml-4'>
                  <p className='lg:text-2xl'>{item.caption}</p>
                  <h5 className='mt-4'>{item.producer}</h5>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default PopularUploads;
