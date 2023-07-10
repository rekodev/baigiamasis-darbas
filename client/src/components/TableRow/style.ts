import styled from 'styled-components';

export const StyledTableRow = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 0.25rem 0;

  p {
    width: 187.5px;
  }

  p:nth-child(4) {
    text-align: end;
    padding-right: 8rem;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.75rem;
  align-items: center;
  /* height: 100%; */
`;
