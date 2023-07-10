import { StyledButton } from './style';

interface IButton {
  text: string;
  onClick: () => void;
  bgColor: string;
}

const Button = ({ text, onClick, bgColor }: IButton) => {
  return (
    <StyledButton $bgcolor={bgColor} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
