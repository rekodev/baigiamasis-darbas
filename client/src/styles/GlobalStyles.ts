import { createGlobalStyle } from 'styled-components';
import backgroundImg from '../assets/big-data-database-td1nyj20hyzfffmt.jpg';

const GlobalStyles = createGlobalStyle`
    :root {
    }
    
    body {
        font-family: 'Roboto', sans-serif;
        background: url(${backgroundImg});
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    #root {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    header {
        flex: 0 0 auto;
    }

    main {
        flex: 1 0 auto;
    }
    
    footer {
        flex: 0 0 auto;
    }

    section {
        width: 100%;
        height: 100%;
    }

    h1 {
        font-size: 1.5rem;
    }

`;

export default GlobalStyles;
