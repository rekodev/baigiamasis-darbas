import SearchIcon from '../SearchIcon';
import { StyledInput, StyledInputContainer } from './style';

interface IInput {
  id: string;
  labelText?: string;
  type: 'text' | 'email' | 'number';
  value?: string | number;
  onChange?: (e: any) => void;
  searchInput?: boolean;
  placeholder?: string;
}

export const Input = ({
  type,
  id,
  labelText,
  value,
  onChange,
  searchInput,
  placeholder,
}: IInput) => {
  return (
    <StyledInputContainer>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      {searchInput && <SearchIcon />}
      <StyledInput
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    </StyledInputContainer>
  );
};
