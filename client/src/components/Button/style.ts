import styled from 'styled-components';

interface IStyledButton {
  $bgcolor: string;
}

export const StyledButton = styled.button<IStyledButton>`
  padding: 16px 32px;
  background-color: ${(props) => (props.$bgcolor ? props.$bgcolor : '')};
  font-family: 'Comfortaa', cursive;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: coral;
    color: #fff;
  }
`;
