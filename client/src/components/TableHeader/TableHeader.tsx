import { StyledTableHeader } from './style';

interface ITableHeader {
  tableHeaderCells: string[];
}

const TableHeader = ({ tableHeaderCells }: ITableHeader) => {
  return (
    <StyledTableHeader>
      {tableHeaderCells.map((cell, idx) => (
        <p key={idx}>{cell}</p>
      ))}
    </StyledTableHeader>
  );
};

export default TableHeader;
