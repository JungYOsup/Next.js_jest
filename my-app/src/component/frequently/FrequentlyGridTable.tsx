import styled from 'styled-components';
import FrequentlyImage from './FrequentlyImage';
import FrequentlyLabel from './FrequentlyLabel';

interface Props {
  rowSize: string | number;
  columnSize: string | number;
  data: string[];
}

const Container = styled.div`
  width: 1500px;
  margin : 0 auto;
  height : 780px;
`
  


const GridLayout = styled.div(({ rowSize, columnSize }: Props) => ({
  display: 'grid',
  // gredTempalteRows와 GridTempalteColumns의 숫자를 유동적으로 바꿔준다
  gridTemplateRows: `repeat(${rowSize}, 1fr)`,
  gridTemplateColumns: `repeat(${columnSize},1fr)`,
  gap: '16px',
  height: '730px',
}));

const DataGrid = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;

  &:hover {
    background-color: blue;
  }
`;

const FrequentlyGridTable = ({ rowSize, columnSize, data }: Props) => {
  // rowSize * columnSize 의 갯수만큼 Grid를 만든다.

  return (
    <Container>
      <GridLayout rowSize={rowSize} columnSize={columnSize}>
        {data.map((list: any) => {
          return (
            <DataGrid>
              <FrequentlyImage img={list.img} />
              <FrequentlyLabel text={list.name} size={20} />
              {list.registered && <div>{list.registered}</div>}
            </DataGrid>
          );
        })}
      </GridLayout>
    </Container>
  );
};

export default FrequentlyGridTable;
