import React from 'react';
import styled from 'styled-components';
import { StyledLink, StyledHref } from '../styling/sharedstyles';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/sign.svg';

const FooterWrapper = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <StyledHref href="https://ooloo.io/employers" target="_blank">
                profy.dev
            </StyledHref>
            <Link to="/">
                <Logo />
            </Link>
            <StyledLink to="/terms">Terms & Privacy</StyledLink>
        </FooterWrapper>
    );
};

export default Footer;
