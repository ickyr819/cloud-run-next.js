import {
  Carousel,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  SliderMainItem,
  CarouselThumbsContainer,
  SliderThumbItem,
} from "@/components/ui/carousel";
import { v2 as cloudinary } from 'cloudinary';
import styles from '../about/Page.module.css';


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
    <div className="h-screen flex flex-col justify-center items-center text-center" style={{ transform: 'scale(1.0)', transformOrigin: 'top left' }}>
  <div id="home-about-content" className="absolute w-full h-full text-center inline-block align-middle leading-normal py-8 px-4 max-w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ width: "65ch", fontFamily: 'FATIB'}}>
    <h2 className={`${styles.HomePageAboutMeTitlefontcolor} text-5xl sm:text-7xl md:text-6xl `}>
      <span>Test</span>
    </h2>
    <div className="flex-grow h-screen flex flex-col justify-center items-center text-center" style={{ position: 'relative', top: '-15vh'  }}>
      <Carousel className="w-full max-w-md">
        <CarouselNext className="top-1/3 -translate-y-1/3" />
        <CarouselPrevious className="top-1/3 -translate-y-1/3" />
        <CarouselMainContainer className="h-60">

        {Array.from({ length: resources.length }).map((_, index) => (
          <SliderMainItem key={index} className="bg-transparent">
            {resources[index] && resources[index].secure_url && resources[index].resource_type === 'image' ? (
              <img src={resources[index].secure_url} style={{ objectFit: 'cover', width: '100%', height: '100%' }}/>
            ) : (
              <video
              src={resources[index].secure_url}
              width={resources[index].width}
              height={resources[index].height}
              controls style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            )}
          </SliderMainItem>
        ))}

        </CarouselMainContainer>
        <CarouselThumbsContainer>
          {Array.from({ length: resources.length }).map((_, index) => (
            <SliderThumbItem key={index} index={index} className="bg-transparent">
              {resources[index] && resources[index].secure_url && resources[index].resource_type === 'image' ? (
              <img src={resources[index].secure_url} style={{ objectFit: 'cover', width: '100%', height: '100%' }}/>
            ) : (
              <video
              src={resources[index].secure_url}
              width={resources[index].width}
              height={resources[index].height}
              controls style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            )}
            </SliderThumbItem>
          ))}
        </CarouselThumbsContainer>
      </Carousel>
    </div>
  </div>
</div>
  );
};
