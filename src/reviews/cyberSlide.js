import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import './cyberStyle.css';

import { cyberImg } from './cyberpunk';

const ImageCarousel = () => {
    return (
        <div className="carousel-container">
        <Swiper
        spaceBetween={10}
        slidesPerView={2} // Show two images at a time
        loop={true} // Enable looping
        autoplay={{
            delay: 4000, // Change slide every 2 seconds (2000 milliseconds)
            disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        navigation // Add navigation props
        modules={[Navigation, Autoplay]} // Include Navigation module
    >
        {cyberImg.map((image, index) => (
            <SwiperSlide key={index}>
                <img src={image.src} alt={`Image ${index + 1}`} className="w-full" />
            </SwiperSlide>
        ))}
    </Swiper>
    </div>
    );
};

export default ImageCarousel;