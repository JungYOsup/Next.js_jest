import Image from 'next/image';

const FrequentlyImage = ({ img }) => {
  return <Image alt="The guitarist in the concert." src={img} layout="fill" />;
};

export default FrequentlyImage;
