import { useEffect, useRef, useState } from 'react';
import { useAddUser } from '../../hooks/useAddUser';
import { StyledModal } from '../../styles/UtilityStyles';
import { COLORS } from '../../types/enums';
import { IUser } from '../../types/user';
import Button from '../Button';
import Input from '../Input';

interface IUserFormModalProps {
  onSubmit: (value: boolean) => void;
}

const UserFormModal = ({ onSubmit }: IUserFormModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const mutation = useAddUser();

  const handleSubmit = async () => {
    handleClose();

    const dataToBeSubmitted: IUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      age: age,
    };

    mutation.mutate(dataToBeSubmitted, {
      onSuccess: () => {
        onSubmit(false);
      },
      onError: () => {
        onSubmit(true);
      },
    });
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        bgColor={COLORS.Blue}
        color='#fff'
        text='Pridėti naują'
      />
      {isOpen && (
        <StyledModal ref={dialogRef}>
          <i onClick={handleClose} className='fa-solid fa-xmark'></i>
          <Input
            id='firstName'
            type='text'
            labelText='Vardas'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            id='lastName'
            type='text'
            labelText='Pavardė'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            id='email'
            type='text'
            labelText='El. paštas'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id='age'
            type='number'
            labelText='Amžius'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <Button
            text='Pridėti naują'
            onClick={handleSubmit}
            bgColor={COLORS.Blue}
            color='#FFF'
          />
        </StyledModal>
      )}
    </>
  );
};

export default UserFormModal;
