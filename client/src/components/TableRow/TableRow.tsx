import Button from '../Button';
import { StyledButtonContainer, StyledTableRow } from './style';

interface ITableRow {
  name: string;
  lastName: string;
  email: string;
  age: number;
}

const TableRow = ({ name, lastName, email, age }: ITableRow) => {
  const handleClickEdit = () => {
    alert('Redaguoti');
  };

  const handleClickDelete = () => {
    alert('Redaguoti');
  };

  return (
    <StyledTableRow>
      <p>{name}</p>
      <p>{lastName}</p>
      <p>{email}</p>
      <p>{age}</p>
      <StyledButtonContainer>
        <Button bgColor='#FFF' text='Redaguoti' onClick={handleClickEdit} />
        <Button bgColor='#FFF' text='Ištrinti' onClick={handleClickDelete} />
      </StyledButtonContainer>
    </StyledTableRow>
  );
};

export default TableRow;
