import { FC } from "react";
import Image from "next/image";

const ImageSlider: FC = () => {
  return (
    <div className='relative flex justify-between items-center'>
      <div className='relative -translate-x-1/4'>
        <div className='absolute w-full h-full bg-gray-950 bg-opacity-40' />
        <Image
          src={"/assets/images/steak1.png"}
          width={500}
          height={300}
          objectFit='cover'
          alt='Bg Image'
          className='z-0 rounded-3xl !h-[500px] object-cover'
        />
      </div>
      <div className='relative'>
        <Image
          src={"/assets/images/steak2.png"}
          width={500}
          height={700}
          objectFit='cover'
          alt='Bg Image'
          className='z-0 rounded-3xl'
        />
        <div className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2'>
          <div className='uppercase text-5xl font-bold'>
            <div>Grilled</div>
            <div>Steak</div>
          </div>
          <div className='mt-2'>Ribeye Beef Steak</div>
        </div>
      </div>
      <div className='relative translate-x-1/4'>
        <Image
          src={"/assets/images/salad.png"}
          width={500}
          height={500}
          objectFit='cover'
          alt='Bg Image'
          className='z-0 rounded-3xl !h-[500px] object-cover'
        />
      </div>
    </div>
  );
};

export default ImageSlider;
