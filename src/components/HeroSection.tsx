import Image from "next/image";
import Button from "./Button";
import ImageSlider from "./ImageSlider";

const HeroSection = () => {
  return (
    <div className='h-screen w-screen relativ text-white z-50 relative'>
      <Image
        src={"/assets/images/bild.jpeg"}
        layout='fill'
        objectFit='cover'
        alt='Bg Image'
        className='z-0 object-cover grayscale'
      />
      <div className='absolute w-full h-full bg-gray-800 z-20 bg-opacity-70' />
      <nav className='px-20 pt-10 w-full flex justify-between relative items-center z-50 lg:flex-row flex-col'>
        <Image
          src={"/assets/images/logo_black.png"}
          alt='Logo'
          width={200}
          height={200}
          className='invert'
        />
        <div className='flex items-center text-white lg:mt-0 mt-8 sm:flex-row flex-col'>
          <div className='mx-12 flex gap-8 font-bold uppercase'>
            <div className='hover:scale-125 transition-all duration-300 cursor-pointer'>
              Huren
            </div>
            <div className='hover:scale-125 transition-all duration-300 cursor-pointer'>
              und
            </div>
            <div className='hover:scale-125 transition-all duration-300 cursor-pointer'>
              Söhne
            </div>
          </div>
          <div className='sm:mt-0 mt-4'>
            <Button>Jetzt ermitteln lassen</Button>
          </div>
        </div>
      </nav>
      <div className='xl:text-9xl md:text-6xl text-4xl z-50 text-white relative flex justify-center text-center mt-40 uppercase opacity-40 xl:leading-[180px] md:leading-[80px] sm:leading-[50px] leading-10 px-16'>
        Ihr Partner für schwierige Fälle
      </div>
    </div>
  );
};

export default HeroSection;
