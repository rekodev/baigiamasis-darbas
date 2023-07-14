import { StyledLoadingSpinner, StyledLoadingSpinnerWrapper } from './style';

interface ILoadingSpinnerProps {
  $fullscreen?: boolean;
}

const LoadingSpinner = ({ $fullscreen }: ILoadingSpinnerProps) => {
  return (
    <StyledLoadingSpinnerWrapper $fullscreen={$fullscreen}>
      <StyledLoadingSpinner />
    </StyledLoadingSpinnerWrapper>
  );
};

export default LoadingSpinner;
