import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Table from './components/Table';
import GlobalStyles from './styles/GlobalStyles';
import { StyledMain, StyledSection } from './styles/UtilityStyles';

const App = () => {
  // Nenorejau naudoti hooks App.tsx faile, bet nezinau kaip kitaip perduot is Headerio searchTerm'a i Table
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <GlobalStyles />
      <Header setSearchTerm={setSearchTerm} />
      <StyledMain>
        <StyledSection>
          <Table searchTerm={searchTerm} />
        </StyledSection>
      </StyledMain>
      <Footer />
    </>
  );
};

export default App;
