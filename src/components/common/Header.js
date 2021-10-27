import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/logo.svg';

const HeaderWrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Nav = styled.nav`
    width: 261px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.color.text};
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <Link to="/">
                <Logo />
            </Link>
            <Nav>
                <StyledLink to="/search">Search</StyledLink>
                <StyledLink to="#how-it-works">How it works</StyledLink>
                <StyledLink to="#about">About</StyledLink>
            </Nav>
        </HeaderWrapper>
    );
};

export default Header;
