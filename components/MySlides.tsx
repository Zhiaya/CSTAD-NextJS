
import { Carousel } from 'flowbite-react';

export default function MySlides() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        <img src="https://istad.co/resources/img/slide/slide-1.jpg" alt="slide1" />
        <img src="https://istad.co/resources/img/slide/slide-2.jpg" alt="slide2" />
        <img src="https://istad.co/resources/img/slide/slide-3.jpg" alt="slide3" />
      </Carousel>
    </div>
  );
}
