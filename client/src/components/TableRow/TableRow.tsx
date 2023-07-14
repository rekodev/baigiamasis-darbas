import { useState } from 'react';
import useDeleteUser from '../../hooks/useDeleteUser';
import { useEditUser } from '../../hooks/useEditUser';
import { IUser } from '../../types/user';
import AlertModal from '../AlertModal';
import Button from '../Button';
import {
  StyledButtonContainer,
  StyledEditableCells,
  StyledTableRow,
} from './style';
import { COLORS } from '../../types/enums';

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

  return (
    <>
      <StyledTableRow>
        {isBeingEdited ? (
          <StyledEditableCells>
            <p
              contentEditable
              suppressContentEditableWarning
              onInput={(e) =>
                setNewFirstName((e.target as HTMLElement).textContent || '')
              }
            >
              {firstName}
            </p>
            <p
              contentEditable
              suppressContentEditableWarning
              onInput={(e) =>
                setNewLastName((e.target as HTMLElement).textContent || '')
              }
            >
              {lastName}
            </p>
            <p
              contentEditable
              suppressContentEditableWarning
              onInput={(e) =>
                setNewEmail((e.target as HTMLElement).textContent || '')
              }
            >
              {email}
            </p>
            <p
              contentEditable
              suppressContentEditableWarning
              onInput={(e) =>
                setNewAge(
                  parseInt((e.target as HTMLElement).textContent || '0')
                )
              }
            >
              {age}
            </p>
          </StyledEditableCells>
        ) : (
          <>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <p>{age}</p>
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
