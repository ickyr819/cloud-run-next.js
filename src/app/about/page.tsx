import React from 'react';
import styles from './Page.module.css';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className={`${styles.root} h-screen flex flex-col justify-center items-center text-center`} style={{ transform: 'scale(1.0)', transformOrigin: 'top left' }}>
      <div className="absolute w-full h-full" >
        <Introduce />
      </div>
    </div>
  );
};

const Introduce: React.FC = () => (
  <div className={`${styles.HomePageAboutMeTitlefontcolor} ${styles.HomePagefont} ${styles.HomePageAboutMebackgroundcolor} flex-grow`} style={{ lineHeight: "100vh" }}>
    <div id="home-about-content" className="inline-block align-middle leading-normal py-8 px-4 max-w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ width: "65ch", fontFamily: 'FATIB'}}>
      <h2 className={` text-5xl sm:text-7xl md:text-8xl `}>2023 Wistron Summer Intern </h2>
      <br></br>
      <div className={`${styles.HomePageAboutMeContentfontcolor} inline-block text-left max-w-full`} style={{ width: "65ch"}}>
        <div style = {{ textAlign: "left", float: "left", width: "100%" }}>
        <Image src="/images/wistron_1.jpg" alt="wistron" width={1200} height={40} className="mt-2" />
        </div>
      </div>
      <h2>More info coming soon...</h2> 
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
export default AboutPage;

