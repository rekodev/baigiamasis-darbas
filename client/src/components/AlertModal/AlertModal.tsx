import { useEffect, useRef } from 'react';
import { StyledModal } from '../../styles/UtilityStyles';

interface IAlertModalProps {
  text: string;
  isOpen: boolean;
  onClose: () => void;
}

const AlertModal: React.FC<IAlertModalProps> = ({ text, isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      if (!dialogRef.current.open) {
        dialogRef.current.showModal();
      }
    } else if (!isOpen && dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  return (
    isOpen && (
      <StyledModal ref={dialogRef}>
        <i onClick={handleClose} className='fa-solid fa-xmark'></i>
        <p className='alertText'>{text}</p>
      </StyledModal>
    )
  );
};

export default AlertModal;
