import styled from 'styled-components';
import { COLORS } from '../types/enums';

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;

export const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 0 1.5rem;
`;

export const StyledModal = styled.dialog`
  padding: 2rem;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  background: #fff;
  border-radius: 0.5rem;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  position: relative;

  button {
    grid-column: 2 / span 1;
  }

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }

  i {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.Gray};
    padding: 0.75rem;
    border-radius: 50%;

    &:hover {
      background-color: #cacaca;
      cursor: pointer;
    }
  }
`;
