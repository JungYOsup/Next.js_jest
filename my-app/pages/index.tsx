import FrequentlySectionCenter from '../src/component/frequently/FrequentlySectionCenter';
import _API_HOME_LIST_ from './api/home/home';
import Styled from "styled-components";
import FrequentlyHeader from '../src/component/frequently/FrequentlyHeader';
import FrequentlySwiperGrid from '../src/component/frequently/FrequentlySwiperGrid';
import FrequentlyGridTable from '../src/component/frequently/FrequentlyGridTable';

const styles = [
  {
    typeList: ['', 'text', 'view'],
    alignList: ['left', 'center', 'right'],
    widthList: ['500px', '500px', '500px'],
    text: '구축사례',
  },
  {
  typeList: ['', 'text', 'view'],
  alignList: ['left', 'center', 'right'],
  widthList: ['500px', '500px', '500px'],
  text: '구축업체 현황',
  },
  {
    typeList: ['', 'text', 'view'],
    alignList: ['left', 'center', 'right'],
    widthList: ['500px', '500px', '500px'],
    text: '제품 소개',
  },
  {
    typeList: ['', 'text', 'view'],
    alignList: ['left', 'center', 'right'],
    widthList: ['500px', '500px', '500px'],
    text: '비즈니스 파트너',
  }
]

const Home = ({ data }) => {

  console.log(data,"안녕");

  const { section } = data;

  // 공통으로 사용할 함수는 따로 빼놓는게 좋을것 같은데

  return <ContentWrapper>
              
              {/* 구축사례 */}
              <FrequentlyHeader {...styles[0]} />
              <FrequentlySwiperGrid  rowSize={2} columnSize={3} data={section[0].img}/>

              {/* 구축업체 현황 */}
              <FrequentlyHeader {...styles[1]}/>
              <FrequentlyGridTable  rowSize={4} columnSize={6} data={section[1].img}/>

              {/* 제품소개 */}
              <FrequentlyHeader {...styles[2]}/>
              <FrequentlySwiperGrid  rowSize={2} columnSize={3} data={section[2].img}/>

              {/* 비즈니스 파트너 */}
              <FrequentlyHeader {...styles[3]}/>
              <FrequentlyGridTable  rowSize={1} columnSize={4} data={section[3].img}/>

         </ContentWrapper>



   




}

export const getStaticProps = async () => {
  const data = await _API_HOME_LIST_();

  return {
    props: {
      data,
    },
  };
};

export default Home;


const ContentWrapper = Styled.div`
  

`
