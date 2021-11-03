import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { defaultSubreddit } from '../../constants';
import { StyledLink } from '../../styling/sharedstyles';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const HeaderWrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2vw;
`;

const Nav = styled.nav`
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    text-align: center;
    font-size: 0.95rem;
    padding: 0 5px;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <Link to="/">
                <Logo />
            </Link>
            <Nav>
                <StyledLink to={`/search/${defaultSubreddit}`}>
                    Search
                </StyledLink>
                <StyledLink as="a" href="#how-it-works">
                    How it works
                </StyledLink>
                <StyledLink as="a" href="#about">
                    About
                </StyledLink>
            </Nav>
        </HeaderWrapper>
    );
};

export default Header;
