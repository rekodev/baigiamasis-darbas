import { StyledTableHeader } from './style';

const TableHeader = () => {
  return (
    <StyledTableHeader>
      {' '}
      <p>Vardas</p>
      <p>Pavardė</p>
      <p>El. paštas</p>
      <p>Amžius</p>
    </StyledTableHeader>
  );
};

export default TableHeader;
