import styled from 'styled-components';
import FrequentlyLabel from './FrequentlyLabel';

interface Props {
  text: string | undefined;
  textAlign: string;
  width: string | number | undefined;
  margin?: string | number;
  onClick?: (data?: any) => void;
  styles?: Record<string, any>; // Record가 뭘까?
  fontSize?: string | number;
}

const Container = styled.div(({ width, textAlign, margin }) => ({
  width,
  textAlign,
  margin,
}));

const commonStyle = {
  borderRadius: 20,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#0029DF',
  paddingTop : 6,
  paddingBottom : 6,
  paddingRight : 24,
  paddingLeft : 24
};

const FrequentlyButton = ({
  text,
  textAlign,
  width,
  margin,
  onClick,
  styles,
  fontSize,
}: Props) => {
  return (
    <Container width={width} textAlign={textAlign}>
      <button onClick={onClick} style={styles ? styles : commonStyle}>
        <FrequentlyLabel text={text} size={fontSize ? fontSize : 18} />
      </button>
    </Container>
  );
};

export default FrequentlyButton;
