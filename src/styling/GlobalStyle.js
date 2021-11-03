import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   /** Montserrat Regular **/

    @font-face {
        font-family: "Montserrat";
        font-weight: 400;
        font-size: normal; 
        src: url("/fonts/Montserrat-Regular.woff2") format("woff2"),
        url("/fonts/Montserrat-Regular.woff") format("woff");
    }

    /** Montserrat Medium **/

    @font-face {
        font-family: "Montserrat";
        font-weight: 500;
        font-size: normal; 
        src: url("/fonts/Montserrat-Medium.woff2") format("woff2"),
        url("/fonts/Montserrat-Medium.woff") format("woff");
    }

    /** Montserrat Semi Bold **/

    @font-face {
        font-family: "Montserrat";
        font-weight: 500;
        font-size: normal; 
        src: url("/fonts/Montserrat-SemiBold.woff2") format("woff2"),
        url("/fonts/Montserrat-SemiBold.woff") format("woff");
    }

    /** Montserrat Bold **/

    @font-face {
        font-family: "Montserrat";
        font-weight: 600;
        font-size: normal; 
        src: url("/fonts/Montserrat-Bold.woff2") format("woff2"),
        url("/fonts/Montserrat-Bold.woff") format("woff");
    }

    /** Bitter Regular **/

    @font-face {
      font-family: "Bitter";
      src: url("/fonts/Bitter-Regular.woff2") format("woff2"),
      url("/fonts/Bitter-Regular.woff") format("woff");
    }

    * {
    box-sizing: border-box;
    }

  #page-container {   
    font-family: ${props => props.theme.font.family.default};
    font-size: ${props => props.theme.font.size.default};
    line-height: ${props => props.theme.font.lineHeight.default};
    color: ${props => props.theme.color.primary};
    padding: ${props => props.theme.padding.default};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;
export default GlobalStyle;
