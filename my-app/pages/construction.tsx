import { useRouter } from 'next/dist/client/router';

const Construction = () => {
  const router = useRouter();

  const goToA = () => {
    router.push(`/construction/${1}`);
  };

  const goToB = () => {
    router.push(`/construction/${2}`);
  };

  const goToC = () => {
    router.push(`/construction/${3}`);
  };

  return (
    <div>
      <div>헤이헤이헤이</div>
      <div onClick={goToA}>가</div>
      <div onClick={goToB}>나</div>
      <div onClick={goToC}>다</div>
    </div>
  );
};
export default Construction;
