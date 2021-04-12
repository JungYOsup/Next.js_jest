// dummyData = []
// state 를 사용할것이기 때문에 arrowfunction으로 하자
// state를 사용하지 않는다면 , normal functions ( function 클래스명 ) 을 사용해주는게 좋다고 함

import styled from 'styled-components';

const MenuContainer = styled.div(() => ({}));
const MenuLists = styled.ul(() => ({
  display: 'flex',
}));
const MenuList = styled.li(() => ({}));

const Menu = () => {
  const HeaderData = ['홈', '회사소개', '구축사례', '제품소개'];

  return (
    <MenuContainer>
      <MenuLists>
        {HeaderData.map((data) => {
          return <MenuList>{data}</MenuList>;
        })}
      </MenuLists>
    </MenuContainer>
  );
};

export default Menu;
