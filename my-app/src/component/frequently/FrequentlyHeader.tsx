import React, { useCallback } from 'react';
import styled from 'styled-components';
import FrequentlyLabel from './FrequentlyLabel';
import { PRIVATE_COLOR } from '../common/style/commonStyle';
import { KeyObject } from 'node:crypto';
import FrequentlyButton from './FrequentlyButton';
import ko from '../common/locale/ko';
import FrequentlyButtonList from './FrequentlyButtonList';

interface Props {
  typeList: string[];
  alignList: string[];
  widthList: string[];
  text?: string | number | undefined;
}

const Container = styled.div<any>(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 30,
  height: 40,
  width: '100%',
}));

const EmptyComponent = styled.div`
  width: ${(props) => props.width};
`;

const FrequentlyHeader = ({ typeList, text, alignList, widthList }: Props) => {
  // type이 view, download일때 에 따른 onclick 기능들
  const onEvent = useCallback(() => {
    typeList.map((type: string) => {
      if (type === 'view') {
        return null;
      } else if (type === 'download') {
        return null;
      }
    });
  }, []);

  const DrawButton = () => {
    // <<예외처리>>
    // typeList와 alignList 와 widthList의 길이가 다를 경우에는 안됨
    return typeList.map((type: string, i: number) => {
      if (type === 'text') {
        return (
          // 컴포넌트의 Props에 Dom 요소의 Props를 넣으면 안된다.
          // 예를들어 text 대신 title Props를 넣으면 X
          // 그 이유는 DOM 요소의 Props중 title이 있기 때문
          // 그리고 props는 초반 소문자 나중 대문자
          <FrequentlyLabel
            text={text}
            size={32}
            // key에 index넣는건 별로 좋지 못함
            // key={type}
            textAlign={alignList[i]}
            width={widthList[i]}
            color="#191919"
          />
        );
      } else if (type === 'view') {
        return (
          <FrequentlyButton
            onClick={onEvent}
            textAlign={alignList[i]}
            width={widthList[i]}
            text={ko.viewAll}
          />
        );
      } else if (type === 'download') {
        return (
          <FrequentlyButton
            onClick={onEvent}
            textAlign={alignList[i]}
            width={widthList[i]}
            text={ko.manual}
          />
        );
      } else if (type === 'list') {
        return (
          <FrequentlyButtonList textAlign={alignList[i]} width={widthList[i]} />
        );
      } else if (type === '') {
        return <EmptyComponent width={widthList[i]} />;
      }
    });
  };

  return (
    <React.Fragment>
      <Container>{DrawButton()}</Container>
    </React.Fragment>
  );
};

export default FrequentlyHeader;

// interface Props {
//   // 오른쪽에 존재하는 것 : Text ,메뉴얼 다운로드 , viewAll , 공장 위치
//   // 왼쪽에 존재하는 것 :  FiterBtn 여러개 , Text,
//   // 센터에 존재하는 것 : FiterBtn , Text

//   rightType?: "allBtn" | "text" | "manualBtn" | "locationBtns";
//   leftType?: "allBtn" | "text" | "fiterBtns";
//   centerType?: "text" | "fiterBtns" | "moveBtns";
//   text?: string | undefined;
//   size?: number;
// }

// const Container = styled.div<any>(() => ({
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "space-between",
//   marginBottom: 16,
//   marginTop: 12,
//   height: 40,
//   width: "100%",
// }));

// const rightButtonFilter = useCallback(() => {
//   if (rightType === "allBtn") {
//     return <FrequentlyButton text={ko.viewAll} width={117} height={40} />;
//   } else if (rightType === "text") {
//     return <FrequentlyLabel text={text} size={32} />;
//   } else if (rightType === "manualBtn") {
//     return <FrequentlyButton text={ko.manual} />;
//   }
// }, []);

// const centerButtonFilter = useCallback(() => {
//   if (centerType === "text") {
//     return <FrequentlyLabel text={text} size={32} />;
//   } else if (centerType === "fiterBtns") {
//     return null;
//   } else if (centerType === "moveBtns") {
//     return <FrequentlyButtonList type={"moveBtns"} />;
//   }
// }, []);

// const leftButtonFilter = useCallback(() => {
//   if (leftType === "allBtn") {
//     return <FrequentlyButton text={ko.viewAll} width={117} height={40} />;
//   } else if (leftType === "text") {
//     return <FrequentlyLabel text={text} size={32} />;
//   }
// }, []);
