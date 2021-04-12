import FrequentlyButton from './FrequentlyButton';
import styled from 'styled-components';
import ko from '../common/locale/ko';
import { useRouter } from 'next/dist/client/router';

const ButtonContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));

const buildAndproduct = [
  '전체보기',
  '프레스 컨트롤러',
  'IoT장비',
  '다른 카테고리 추가기능',
];

const company = [
  '인사말',
  '회사 연혁',
  '인증 현황',
  '비즈니스 파트너',
  '찾아오시는 길',
];

const FrequentlyButtonList = ({ onClick }: any) => {
  const router = useRouter();

  const goToEvent = () => {
    let type = '';
    let title = '';

    if (type === 'build') {
      if (title === '전체보기') {
      } else if (title === '프레스 컨트롤러') {
      } else if (title === 'IoT장비') {
      } else if (title === '다른 카테고리 추가기능') {
      }
    } else if (type === 'product') {
      if (title === '전체보기') {
      } else if (title === '프레스 컨트롤러') {
      } else if (title === 'IoT장비') {
      } else if (title === '다른 카테고리 추가기능') {
      }
    } else if (type === 'company') {
      if (title === '인사말') {
      } else if (title === '회사 연혁') {
      } else if (title === '인증 현황') {
      } else if (title === '비즈니스 파트너') {
      } else if (title === '찾아오시는 길') {
      }
    }
  };

  const DrawButtonList = () => {
    // 구축사례 페이지일때
    // 제품 소개 페이지일때
  };

  // 여기서 redux스로 현재페이지에 대한 정보를 가져오고
  // 그 페이지에 필요한 buttonList들을 뿌려준다.

  return <ButtonContainer>버튼모음</ButtonContainer>;
};

export default FrequentlyButtonList;
