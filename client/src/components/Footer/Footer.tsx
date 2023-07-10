import { StyledFooter } from './style';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>&copy; {currentYear} Visos teisės saugomos</StyledFooter>
  );
};

export default Footer;
