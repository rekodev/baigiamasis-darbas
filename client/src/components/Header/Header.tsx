import { COLORS } from '../../styles/enums';
import Button from '../Button';
import { StyledHeader } from './style';

const handleClick = () => {
  alert('clicked');
};

const Header = () => {
  return (
    <StyledHeader>
      <Button
        onClick={handleClick}
        bgColor={COLORS.Gray}
        text='Pridėti naują'
      />
    </StyledHeader>
  );
};

export default Header;
