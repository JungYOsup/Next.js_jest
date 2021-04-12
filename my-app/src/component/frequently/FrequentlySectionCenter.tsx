interface Props {
  children?: React.ReactElement;
  style?: Record<string, unknown>;
}


const FrequentlySectionCenter = ({ children }: Props) => {
  return <section>{children}</section>;
};

export default FrequentlySectionCenter;
