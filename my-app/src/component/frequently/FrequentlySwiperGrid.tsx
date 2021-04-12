import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import FrequentlyGridTable from './FrequentlyGridTable';
import { SwiperSlide, Swiper } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, A11y]);

const FrequentlySwiperGrid = ({ rowSize, columnSize, data }: any) => {



  const GridDraw = () => {
    const gridData = filterData();

    return gridData.map((data) => {

      return (
        
          <SwiperSlide>
            <FrequentlyGridTable
              data={data}
              rowSize={rowSize}
              columnSize={columnSize}
            />
          </SwiperSlide>
        
      );
    });
  };

  const filterData = () => {

    const num = Math.ceil(data.length / (rowSize * columnSize));
    const newData = [];
    for (let i = 0; i < num; i++) {
      let start = i * rowSize * columnSize;
      let end = rowSize * columnSize * (i + 1);
      newData.push(data.slice(start, end));
    }

    return newData;
  };

  return (
    <Swiper
      className="swiper-container"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      style={{marginBottom:"75px"}}
    >

      {GridDraw()}
    
    </Swiper>
  );
};

export default FrequentlySwiperGrid;
