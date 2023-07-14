import SearchBar from '../SearchBar';
import { StyledHeader, StyledHeaderContainer } from './style';

interface IHeaderProps {
  setSearchTerm: (value: string) => void;
}

const Header = ({ setSearchTerm }: IHeaderProps) => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <SearchBar setSearchTerm={setSearchTerm} />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
