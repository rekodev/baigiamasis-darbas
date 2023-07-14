import styled from 'styled-components';

export const StyledTableCells = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.25rem 0;
  position: relative;
  height: 56px;

  p {
    width: 182px;
    max-width: 182px;
    overflow: hidden;
  }

  p:nth-child(4) {
    text-align: end;
    width: 60px;
  }
`;

export const StyledEditableTableCells = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  height: 56px;

  p {
    padding: 0.125rem 0.25rem;
    background-color: #fff;
    border: 1px solid black;
    width: 182px;
    max-width: 182px;
    overflow: hidden;
    border-radius: 5px;
    max-height: 25px;
  }

  p:nth-child(4) {
    text-align: end;
    width: 60px;
  }
`;
