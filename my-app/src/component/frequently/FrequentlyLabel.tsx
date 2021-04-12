import React, { useMemo } from 'react';
import styled from 'styled-components';
import { PRIVATE_COLOR } from '../common/style/commonStyle';

interface Props {
  text: string | number | undefined;
  size: string | number;
  color?: string;
  weight?: 'bold';
  textAlign?: string;
  lineHeight?: string | number;
  fontFamily?: string;
  width?: string | number;
}

interface LabelProps {
  size: string | number;
  color?: string;
  weight?: 'bold';
  textAlign?: string;
  lineHeight?: string | number;
  fontFamily?: string;
  width: string | number;
}
const Label = styled.div(
  ({
    size,
    color,
    weight,
    textAlign,
    lineHeight,
    fontFamily,
    width,
  }: LabelProps) => ({
    fontSize: size,
    color: color ? color : PRIVATE_COLOR.black,
    fontWeight: weight,
    textAlign,
    lineHeight,
    width,
    fontFamily: fontFamily ? fontFamily : 'Noto Sans CJK KR',
  })
);

const FrequentlyLabel: React.FunctionComponent<Props> = ({
  text,
  size,
  width,
  color,
  weight,
  textAlign,
  lineHeight,
  fontFamily,
}) => {
  const label = React.useMemo(() => {
    if (typeof text === 'number') {
      return text.toString();
    } else if (text) {
      return text;
    } else {
      return '';
    }
  }, [text]);

  return (
    <Label
      size={size}
      color={color}
      weight={weight}
      textAlign={textAlign}
      lineHeight={lineHeight}
      fontFamily={fontFamily}
      width={width}
    >
      {label}
    </Label>
  );
};

export default FrequentlyLabel;
