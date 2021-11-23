import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px 5%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.inputColor || props.theme.color.primary};
`;

const MainWrapper = styled.section`
    flex-grow: 1;
`;

const Button = styled.button`
    background-color: ${props => props.theme.color.buttons};
    color: white;
    text-transform: uppercase;
    height: 36px;
    font-size: 0.8rem;
    padding: 8px 11px;
    border: 0px;
    border-radius: 5px;
    margin: 26px 0px;
    text-decoration: none;
    cursor: pointer;
`;

const H1 = styled.h1`
    font-family: ${props => props.theme.font.family.headline};
    color: ${props => props.theme.color.secondary};
    font-weight: 400;
    font-size: 2rem;
    line-height: 45.6px;
    margin: 10px 0;
`;

export { StyledLink, MainWrapper, Button, Section, H1 };
