import { createGlobalStyle } from 'styled-components';

const GlobalFonts = createGlobalStyle`
@font-face {
    font-family: 'JalnanGothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/JalnanGothic.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  body * {
    font-family: 'Montserrat','JalnanGothic', sans-serif;
    
    
  }
`;
export default GlobalFonts;
