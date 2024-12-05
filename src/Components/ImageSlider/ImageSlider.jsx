import React from 'react';
import './ImageSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import image1 from '../../assets/about.png'
import image2 from '../../assets/program-1.png'
import image3 from '../../assets/program-2.png'
import image4 from '../../assets/program-3.png'


const ImageSlider = () => {
  const images = [
    'https://via.placeholder.com/800x400?text=Image+1',
    'https://via.placeholder.com/800x400?text=Image+2',
    'https://via.placeholder.com/800x400?text=Image+3',
    'https://via.placeholder.com/800x400?text=Image+4',
  ];

  return (
    <div className='imageSlider' style={{ width: '80%', margin: '0 auto' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {images.map((image, index) => (
          <SwiperSlide  key={index}>
            <img
              src={image1}
              alt={`Slide ${index + 1}`}
              style={{ width: '50%', height: 'auto', borderRadius: '10px' }}
            />
              <img
              src={image2}
              alt={`Slide ${index + 1}`}
              style={{ width: '50%', height: 'auto', borderRadius: '10px' }}
            />
              <img
              src={image3}
              alt={`Slide ${index + 1}`}
              style={{ width: '50%', height: 'auto', borderRadius: '10px' }}
            />
              <img
              src={image4}
              alt={`Slide ${index + 1}`}
              style={{ width: '50%', height: 'auto', borderRadius: '10px' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
