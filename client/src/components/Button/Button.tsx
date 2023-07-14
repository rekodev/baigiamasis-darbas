import { StyledButton } from './style';

interface IButton {
  text: string;
  onClick: any;
  bgColor: string;
  color?: string;
}

const Button = ({ text, onClick, bgColor, color }: IButton) => {
  return (
    <StyledButton $color={color} $bgcolor={bgColor} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
