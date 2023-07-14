import styled from 'styled-components';

export const StyledTableRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.25rem 0;
  position: relative;
  height: 80px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.75rem;
  align-items: center;
  margin-left: 1rem;
  position: absolute;
  right: 0;

  p {
    position: absolute;
    left: 0;
    top: -22.5px;
    font-size: 14px;
  }
`;
