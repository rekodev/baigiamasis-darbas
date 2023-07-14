import { IEditableCell } from '../../types/editableCell';
import { StyledEditableTableCells, StyledTableCells } from './style';

interface ITableCellsProps {
  cells: string[];
  editableCells?: IEditableCell<any>[];
}

const TableCells = ({ cells, editableCells }: ITableCellsProps) => {
  return editableCells ? (
    <StyledEditableTableCells>
      {editableCells.map((editableCell, idx) => (
        <p
          key={idx}
          contentEditable
          suppressContentEditableWarning
          onInput={(e) =>
            editableCell.setNewValue(
              (e.target as HTMLElement).textContent || ''
            )
          }
        >
          {editableCell.value}
        </p>
      ))}
    </StyledEditableTableCells>
  ) : (
    <StyledTableCells>
      {cells.map((cell, idx) => (
        <p key={idx}>{cell}</p>
      ))}
    </StyledTableCells>
  );
};

export default TableCells;
