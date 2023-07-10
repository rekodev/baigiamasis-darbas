import { StyledLoadingSpinner, StyledLoadingSpinnerWrapper } from './style';

interface ILoadingSpinnerProps {
  fullScreen?: boolean;
}

const LoadingSpinner = ({ fullScreen }: ILoadingSpinnerProps) => {
  return (
    <StyledLoadingSpinnerWrapper fullScreen={fullScreen}>
      <StyledLoadingSpinner />
    </StyledLoadingSpinnerWrapper>
  );
};

export default LoadingSpinner;
