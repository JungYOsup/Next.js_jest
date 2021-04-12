import Image from 'next/image';
import styled from 'styled-components';
import FrequentlyButton from '../frequently/FrequentlyButton';
import FrequentlyLists from '../frequently/FrequentlyLists';

const HeaderNav = styled.nav(() => ({
  display: 'flex',
  height: '72px',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'sticky',
  left: 0,
  top: 0,
  zIndex: 1111,
}));

const HeaderData = ['홈', '회사소개', '구축사례', '제품소개'];

const headerStyle = {};

const HeaderMenu = () => {
  return (
    <HeaderNav>
      <Image src="/images/Logo.jpg" alt="df" width="130" height="35" />
      <FrequentlyLists>
        {HeaderData.map((data) => {
          return (
            <FrequentlyButton
              text={data}
              textAlign="right"
              width="112px"
              margin="16px"
              styles={headerStyle}
            />
          );
        })}
      </FrequentlyLists>
    </HeaderNav>
  );
};
export default HeaderMenu;
