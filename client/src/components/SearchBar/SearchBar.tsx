import { useState } from 'react';
import AlertModal from '../AlertModal';
import Input from '../Input';
import UserFormModal from '../UserFormModal';
import { StyledSearchBar } from './style';

interface ISearchBarProps {
  setSearchTerm: (value: string) => void;
}

const SearchBar = ({ setSearchTerm }: ISearchBarProps) => {
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  const handleUserFormSubmit = (isError: boolean) => {
    setError(isError);
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setError(false);
  };

  return (
    <StyledSearchBar>
      <Input
        placeholder='Search...'
        searchInput={true}
        id='search'
        type='text'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <UserFormModal onSubmit={handleUserFormSubmit} />
      {showAlert && !error ? (
        <AlertModal
          text='Vartotojas pridėtas sėkmingai!'
          isOpen={showAlert}
          onClose={handleCloseAlert}
        />
      ) : (
        showAlert &&
        error && (
          <AlertModal
            text='Klaida: Negalite palikti tuščių laukų.'
            isOpen={showAlert}
            onClose={handleCloseAlert}
          />
        )
      )}
    </StyledSearchBar>
  );
};

export default SearchBar;
