import { useState } from 'react';
import useDeleteUser from '../../hooks/useDeleteUser';
import { useEditUser } from '../../hooks/useEditUser';
import { IEditableCell } from '../../types/editableCell';
import { COLORS } from '../../types/enums';
import { IUser } from '../../types/user';
import AlertModal from '../AlertModal';
import Button from '../Button';
import TableCells from '../TableCells';
import { StyledButtonContainer, StyledTableRow } from './style';

const TableRow = ({ _id, firstName, lastName, email, age }: IUser) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [isBeingDeleted, setIsBeingDeleted] = useState(false);

  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newEmail, setNewEmail] = useState(email);
  const [newAge, setNewAge] = useState(age);

  const deleteUserMutation = useDeleteUser();
  const editUserMutation = useEditUser();

  const handleDeleteUser = () => {
    setIsBeingDeleted(true);
  };

  const handleEditUser = () => {
    setIsBeingEdited(true);
    setNewFirstName(firstName);
    setNewLastName(lastName);
    setNewEmail(email);
    setNewAge(age);
  };

  const handleSaveChange = () => {
    if (isBeingEdited) {
      const dataToBeEdited: IUser = {
        _id: _id,
        firstName: newFirstName,
        lastName: newLastName,
        email: newEmail,
        age: newAge,
      };

      editUserMutation.mutate(dataToBeEdited);
      setIsBeingEdited(false);
    } else if (isBeingDeleted) {
      if (_id) deleteUserMutation.mutate(_id);
      setIsBeingDeleted(false);
      setIsOpen(true);
    }
  };

  const handleCancellation = () => {
    if (isBeingEdited) {
      setIsBeingEdited(false);
      setNewFirstName(firstName);
      setNewLastName(lastName);
      setNewEmail(email);
      setNewAge(age);
    } else if (isBeingDeleted) {
      setIsBeingDeleted(false);
    }
  };

  // Table cells inside TableRow
  const cells = [firstName, lastName, email, age.toString()];

  const editableCells: IEditableCell<any>[] = [
    { value: firstName, setNewValue: setNewFirstName },
    { value: lastName, setNewValue: setNewLastName },
    { value: email, setNewValue: setNewEmail },
    { value: age, setNewValue: setNewAge },
  ];

  return (
    <>
      <StyledTableRow>
        {isBeingEdited ? (
          <TableCells
            cells={[firstName, lastName, email, age.toString()]}
            editableCells={editableCells}
          />
        ) : (
          <>
            <TableCells cells={cells} />
          </>
        )}

        <StyledButtonContainer>
          {isBeingEdited ? (
            <>
              <Button
                bgColor={COLORS.Blue}
                color='#FFF'
                text='Išsaugoti'
                onClick={handleSaveChange}
              />
              <Button
                bgColor='#FFF'
                text='Atšaukti'
                onClick={handleCancellation}
              />
            </>
          ) : isBeingDeleted ? (
            <>
              <p>Ar tikrai norite ištrinti?</p>
              <Button
                bgColor={COLORS.Error}
                color='#FFF'
                text='Taip'
                onClick={handleSaveChange}
              />
              <Button
                bgColor='#FFF'
                text='Atšaukti'
                onClick={handleCancellation}
              />
            </>
          ) : (
            <>
              <Button
                bgColor='#FFF'
                text='Redaguoti'
                onClick={handleEditUser}
              />
              <Button
                bgColor={COLORS.Error}
                color='#FFF'
                text='Ištrinti'
                onClick={handleDeleteUser}
              />
            </>
          )}
        </StyledButtonContainer>
      </StyledTableRow>
      {isOpen && (
        <AlertModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          text='Vartotojas ištrintas sėkmingai!'
        />
      )}
    </>
  );
};

export default TableRow;
