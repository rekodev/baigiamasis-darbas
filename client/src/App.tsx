import Footer from './components/Footer';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Table from './components/Table';
import GlobalStyles from './styles/GlobalStyles';
import { StyledMain, StyledSection } from './styles/UtilityStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <StyledMain>
        <StyledSection>
          <Table />
          <Pagination />
        </StyledSection>
      </StyledMain>
      <Footer />
    </>
  );
};

export default App;
