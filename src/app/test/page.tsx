"use client"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../test/Page.module.css';

const TestPage = () => {
  const images = [
    'https://res.cloudinary.com/dzu8oxqbu/image/upload/v1713933193/Wistron/444228_qqrbdk.jpg',
    'https://res.cloudinary.com/dzu8oxqbu/image/upload/v1713933199/Wistron/444232_sjgsf2.jpg',
    'https://res.cloudinary.com/dzu8oxqbu/image/upload/v1713933198/Wistron/444231_jozb8l.jpg',
    'https://res.cloudinary.com/dzu8oxqbu/image/upload/v1713933196/Wistron/444230_nkpbn6.jpg',
    'https://res.cloudinary.com/dzu8oxqbu/image/upload/v1713933192/Wistron/444233_tsysa1.jpg'
  ];

  return (
    <div className={`${styles.root} h-screen flex flex-col justify-center items-center text-center`} style={{ transform: 'scale(1.0)', transformOrigin: 'top left' }}>
      <div className="absolute w-full h-full">
        <Introduce images={images} />
      </div>
    </div>
  );
};

const Introduce: React.FC<{images: string[]}> = ({ images }) => (
  <div className={`${styles.HomePageAboutMeTitlefontcolor} ${styles.HomePagefont} ${styles.HomePageAboutMebackgroundcolor} flex-grow`} style={{ lineHeight: "100vh" }}>
    <div id="home-about-content" className="inline-block align-middle leading-normal py-8 px-4 max-w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ width: "65ch", fontFamily: 'FATIB'}}>
      <h2 className={` text-5xl sm:text-7xl md:text-6xl `}>2023 Wistron Summer Intern </h2>
      <br></br>
      <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`slider-${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <br></br>
      <a className="scale-in-center-2 anim-delay-700 text-white group bg-yellow-400 rounded inline-block text-xl md:text-2xl transition hover:bg-white focus:ring ring-opacity-50 ring-yellow-400" href="/">
        <span className="inline-block px-4 py-2 rounded-l border border-yellow-400 group-hover:text-yellow-400">Home</span>
        <span className="inline-block bg-yellow-500 py-2 pl-2 pr-2 group-hover:pl-3 group-hover:pr-1 transition-all rounded-r border border-yellow-400 border-l-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="inline-block" style={{ width: "1em", height: "1em", verticalAlign: "-0.14em" }}>
            <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
            <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
          </svg>
        </span>
      </a>
    </div>
  </div>
);

export default TestPage;
