import styled from 'styled-components';
import { COLORS } from '../../types/enums';
import { hexToRgba } from '../../functions/hexToRgba';

interface IStyledPaginationNumber {
  $active: boolean;
}

export const StyledPagination = styled.nav`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  max-width: 1100px;
  font-weight: 400;
  border-radius: 0 0 15px 15px;
  min-height: 57px;

  ul {
    display: flex;
    list-style: none;
    gap: 0.5rem;
  }
`;

export const StyledPaginationPageNumber = styled.li<IStyledPaginationNumber>`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: ${(props) =>
    props.$active ? '-1px 1px 5px -1.25px gray' : 'none'};
  border: ${(props) => (props.$active ? 'none' : `1px solid ${COLORS.Blue}`)};

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.$active ? COLORS.Blue : 'none')};
    text-decoration: none;
    color: ${(props) => (props.$active ? '#fff' : COLORS.Blue)};
    height: 100%;
    width: 100%;
  }

  a:hover {
    background-color: ${hexToRgba(COLORS.Blue)};
    color: #fff;
  }

  &:hover {
    border: ${(props) =>
      props.$active ? 'none' : `1px solid ${hexToRgba(COLORS.Blue)}`};
  }
`;
