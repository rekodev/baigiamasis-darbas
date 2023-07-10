import styled from 'styled-components';

interface IStyledLoadingSpinnerProps {
  fullScreen?: boolean;
}

export const StyledLoadingSpinner = styled.div<IStyledLoadingSpinnerProps>`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  border: 8px solid #f3f3f3;
  border-top: 8px solid coral;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
`;

export const StyledLoadingSpinnerWrapper = styled.div<IStyledLoadingSpinnerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: ${(props) => (props.fullScreen ? '100vh' : '60px')}; */
  height: 100%;
`;
