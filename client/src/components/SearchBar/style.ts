import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  height: 100%;
  background-color: #ddd;
  width: 100%;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 1rem;

  > div:first-child {
    width: calc(100% / 3);
    height: 75%;

    input {
      padding-left: 32px;
      border-radius: 15px;
      height: 100%;
    }
  }
`;
