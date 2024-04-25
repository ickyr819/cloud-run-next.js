import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { v2 as cloudinary } from 'cloudinary';
import styles from '../about/Page.module.css';
import Image from "next/image";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

async function getData({ searchParams }: { searchParams: any }) {
  let expression = `folder=${process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER}/*`;
  const query = searchParams.query;

  if (query) {
    expression = `${expression} AND ${query}`;
  }
  const { resources } = await cloudinary.search.expression(expression).execute();

  return resources;
}

export default async function Page({ searchParams }: { searchParams: any }) {
  const resources = await getData({ searchParams });

  return (
    <div className={`${styles.root} ${styles.HomePageAboutMeTitlefontcolor} ${styles.HomePagefont} ${styles.HomePageAboutMebackgroundcolor} flex-grow h-screen flex flex-col justify-center items-center text-center`} style={{ transform: 'scale(1.0)', transformOrigin: 'top left', lineHeight:'100vh' }}>
    <div className="absolute w-full h-full inline-block align-middle leading-normal py-8 px-4 max-w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ width: "65ch", fontFamily: 'FATIB'}}>
    <h2 className={`${styles.AnimationDropIn} text-5xl sm:text-7xl md:text-6xl `}>
        <span>2023 Wistron Summer Intern</span>
    </h2>
      <br></br>
      <div>
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
      {resources.map((resource: any) => (
        <div key={resource.public_id}>
          {resource.resource_type === 'image' ? (
            <Image
              src={resource.secure_url}
              alt=""
              width={720}
              height={480}
              className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            />
          ) : (
            <video
              src={resource.secure_url}
              width={resource.width}
              height={resource.height}
              controls
            />
          )}
        </div>
      ))}
    </div>
    </div>
    </div>
    </div>
  );
}
