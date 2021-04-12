import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, A11y]);

const FrequentlySwiper = ({ children }: any) => {
  return (
    <Swiper
      className="swiper-container"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {children}
    </Swiper>
  );
};

export default FrequentlySwiper;
