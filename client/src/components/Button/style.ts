import styled from 'styled-components';
import { hexToRgba } from '../../functions/hexToRgba';

interface IStyledButton {
  $bgcolor: string;
  $color?: string;
}

export const StyledButton = styled.button<IStyledButton>`
  padding: 16px 32px;
  background-color: ${(props) => (props.$bgcolor ? props.$bgcolor : '')};
  font-family: 'Roboto', sans-serif;
  border: none;
  color: ${(props) => (props.$color ? props.$color : 'black')};
  cursor: pointer;
  min-width: 135px;
  border-radius: 15px;
  box-shadow: -2.5px 2.5px 12.5px -5px lightgray;

  &:hover {
    background-color: ${(props) => hexToRgba(props.$bgcolor)};
    /* color: #fff; */
  }
`;
