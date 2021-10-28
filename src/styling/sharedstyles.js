import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.color.primary};
`;

const MainWrapper = styled.section`
    flex-grow: 1;
`;

const Button = styled.button`
    background-color: #fdb755;
    color: white;
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 8px 11px;
    border: 0px;
    border-radius: 5px;
    margin: 26px 0px;
`;

export { StyledLink, MainWrapper, Button };
