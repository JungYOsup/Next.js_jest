import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  width: string | number;
  height: string | number;
  src?: string;
  alt?: string;
}

const FrequentlyBackground = ({ width, height, alt, src }: Props) => {
  
  return (
   
      <Image
        src="/images/dummyBackground.jpg"
        alt="Picture of the author"
        layout="fill"
        
      />
    
  );
};

export default FrequentlyBackground;
