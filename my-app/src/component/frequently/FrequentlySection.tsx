import ko from '../common/locale/ko';
import FrequentlyGridTable from './FrequentlyGridTable';
import FrequentlyHeader from './FrequentlyHeader';
import FrequentlySwiperGrid from './FrequentlySwiperGrid';
import styled from 'styled-components';

const Section = styled.section``;

const FrequentlySection = ({ list }: any) => {
  const FilterSectionDraw = () => {
    const data = list.img;

    if (list.title === '구축사례') {
      const styled = {
        typeList: ['', 'text', 'download'],
        alignList: ['left', 'center', 'right'],
        widthList: ['500px', '500px', '500px'],
        text: '구축사례',
      };

      return (
        <>
          <FrequentlyHeader {...styled} />
          <FrequentlySwiperGrid  rowSize={2} columnSize={3} data={data}/>
        </>
      );
    } else if (list.title === '구축 업체 현황') {
      const styled = {
        typeList: ['', 'text', 'view'],
        alignList: ['left', 'center', 'right'],
        widthList: ['500px', '500px', '500px'],
        text: '구축업체 현황',
      };

      return (
        <>
          <FrequentlyHeader {...styled} />
          <FrequentlyGridTable rowSize={4} columnSize={6} data={data} />
        </>
      );
    }
  };

  return <section>{FilterSectionDraw()}</section>;
};

export default FrequentlySection;
