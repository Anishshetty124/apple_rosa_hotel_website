// src/components/ui/ImageSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importing your local images from the src/assets folder
import authenticCurries from '../../assets/AuthenticCurries.jpeg';
import goanSeafood from '../../assets/GoanSeafood.jpeg';
import tandooriDelights from '../../assets/TandooriDelights.png';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';

const images = [
  authenticCurries, goanSeafood, tandooriDelights,
  img1, img2, img4, img5, img6, img7
];

export const ImageSlider = () => {
  return (
    <div className="relative h-64 md:h-96 w-full bg-black/10 dark:bg-black/30 rounded-lg"> 
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <img 
              src={imgSrc} 
              alt={`Apple Rosa Gallery Image ${index + 1}`} 
              // CHANGED: 'object-contain' fits the whole image inside the slide
              className="w-full h-full object-contain" 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};