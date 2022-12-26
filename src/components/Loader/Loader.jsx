import { ThreeDots } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

export const Loader = () => {
  return (
    <Spinner>
      <ThreeDots width="150" color="#969696" />
    </Spinner>
  );
};
