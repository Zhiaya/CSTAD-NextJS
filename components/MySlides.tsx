
import { Carousel } from 'flowbite-react';

const scrollContainer ={
    base:'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth '
}

export default function MySlides() {
  return (
     <div className="h-56 sm:h-64 xl:h-80 2xl:h-screen" >
      <Carousel theme={{scrollContainer}} pauseOnHover>
        <img src="https://istad.co/resources/img/slide/slide-1.jpg" className='h-full object-cover'  alt="slide1" />
        <img src="https://istad.co/resources/img/slide/slide-2.jpg" className='h-full object-cover' alt="slide2" />
        <img src="https://istad.co/resources/img/slide/slide-3.jpg" className='h-full object-cover' alt="slide3" />
      </Carousel>
    </div>
  );
}
