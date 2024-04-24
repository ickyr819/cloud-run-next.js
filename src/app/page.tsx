import React from 'react';
import styles from './Page.module.css';
import Image from 'next/image';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: {
    absolute: "Ricky Ko",
  },
}

const HomePage: React.FC = () => {
  return (
    <div className={`${styles.root} h-screen flex flex-col justify-center items-center text-center`} style={{ transform: 'scale(1.0)', transformOrigin: 'top left' }}>
      <div className="absolute w-full h-full" >
        {/* <Home /> */}
        <Content1 />
        <Content2 />
      </div>
    </div>
  );
};

const Content1: React.FC = () => (
  <div className={`${styles.HomePagefontcolor} ${styles.HomePagefont} flex-grow `} style={{ background: 'url("/images/slides.png")', backgroundSize: 'cover', backgroundPosition: 'center', lineHeight: '100vh' }}>
    <div id="home-about-content" className="inline-block align-middle leading-normal py-8 px-4 max-w-full text-white text-center"  style={{  fontFamily: 'FATIB'}}>
      <div className="bg-black bg-opacity-50 py-4 px-8 rounded-lg text-center h-full flex flex-col justify-center">
        <h2 className={`${styles.AnimationScale} text-6xl sm:text-8xl md:text-9xl mb-8`}>Ricky Ko</h2>
        <h3 className={` text-3xl sm:text-4xl md:text-4xl mb-4 `}>rickyvault.eth</h3>
      </div>
      <br /><br />
        <a className="scale-in-center-2 anim-delay-700 text-white group bg-yellow-400 rounded inline-block text-xl md:text-2xl transition hover:bg-white focus:ring ring-opacity-50 ring-yellow-400" href="https://opensea.io/RickyVault_">
          <span className="inline-block px-4 py-2 rounded-l border border-yellow-400 group-hover:text-yellow-400">My collections</span>
          <span className="inline-block bg-yellow-500 py-2 pl-2 pr-2 group-hover:pl-3 group-hover:pr-1 transition-all rounded-r border border-yellow-400 border-l-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="inline-block" style={{ width: "1em", height: "1em", verticalAlign: "-0.14em" }}>
              <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
              <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
          </span>
        </a>
        <div className={`${styles.AnimationDropIn}  absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center text-white py-4 `}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-chevron-down mx-auto" viewBox="0 0 16 16" transform="rotate(180)">
          <path fillRule="evenodd" d="M7.646 9.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L8 10.707l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 0 .708z"/>
          </svg>
        </div>
    </div>
  </div>
);

const Content2: React.FC = () => (
  <div className={`${styles.HomePageAboutMeTitlefontcolor} ${styles.HomePagefont} ${styles.HomePageAboutMebackgroundcolor} flex-grow`} style={{ lineHeight: "100vh" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" transform="rotate(180)" style={{ position: "absolute", top: "100%", left: 0, width: "100%" }}>
        <path fill="#b3fad7" fillOpacity="1" d="M0,128L60,144C120,160,240,192,360,202.7C480,213,600,203,720,197.3C840,192,960,192,1080,181.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    <div id="home-about-content" className="inline-block align-middle leading-normal py-8 px-4 max-w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ width: "65ch", fontFamily: 'FATIB'}}>
      <h2 className={`${styles.AnimationWave}  text-5xl sm:text-7xl md:text-8xl `}>About Me</h2>
      <br></br>
      <br />
      <div className={`${styles.HomePageAboutMeContentfontcolor} inline-block text-left max-w-full`} style={{ width: "65ch"}}>
        <div style = {{ textAlign: "left", float: "left", width: "100%" }}>
      Hi, I&apos;m Yu-Chun Ko, also you can call me Ricky. I graduated from National ChiNan University (NCNU), majoring in Information Management.<br></br>
      My studies covered a wide range of topics which includes machine learning, deep learning, big data, and model building. I&apos;m skilled in using Python, Mysql, UiPath, and Automation Anywhere to solve various problems.
      <br /><br />
      Currently, I&apos;m learning Next.js during my free time... This is just one of the prototypes I&apos;m working on, but I&apos;m eager to continue exploring and experimenting.<br /><br />
        </div>
      </div>
      <div className="bg-black bg-opacity-0 py-4 px-8 rounded-lg text-center h-full flex justify-between">
      <Image src="/images/program language.png" alt="program language" width={1200} height={40} className="mt-2" />
      </div>
      <br /><br />
      <a className="scale-in-center-2 anim-delay-700 text-white group bg-yellow-400 rounded inline-block text-xl md:text-2xl transition hover:bg-white focus:ring ring-opacity-50 ring-yellow-400" href="/about">
        <span className="inline-block px-4 py-2 rounded-l border border-yellow-400 group-hover:text-yellow-400">Read More</span>
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

export default HomePage;