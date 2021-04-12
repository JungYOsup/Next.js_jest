import { useState } from 'react';
import Styled from 'styled-components';
import FrequentlyBackground from '../frequently/FrequentlyBackgroud';



const Container = Styled.section(() => ({
  width: '100%',
  textAlign: 'center',
  marginBottom : "51px"
}));

// 백그라운드 + (어떤것은 라벨만 있고, 어떤것은 로고 + 라벨)
// 페이지에 따라 받은 데이터에 따라 이미지와 슬로건이 바뀜
const BannerCompany = () => {

 
  return (
    <Container>
      <BackgroundWrapper>
          <div>이미지</div>
          <BannerTitle>
            <p>회사 슬로건 회사 슬로건 회사 슬로건 회사 슬로건</p>
          </BannerTitle>
          <FrequentlyBackground width="1900px" height="600px" />
      </BackgroundWrapper>
    </Container>
  );
};

export default BannerCompany;

const BackgroundWrapper = Styled.div`

  position : relative;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  height: 600px;
  width : 100%;

`
const BannerTitle = Styled.div`

  z-index : 111;
  font-size : 32px;
  text-align : center;
  font-family : Noto Sans CJK KR;
  font-weight : bold;
  color : #FFFFFF;
  text-shadow: 0px 3px 4px #0000009B;

`