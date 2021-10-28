import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../styling/sharedstyles';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/sign.svg';

const FooterWrapper = styled.div`
    height: 100px;
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    > * {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const hasFlex = {
    flex: '1',
};

const Footer = () => {
    return (
        <FooterWrapper>
            <StyledLink
                as="a"
                href="https://ooloo.io/employers"
                target="_blank"
                style={hasFlex}
            >
                profy.dev
            </StyledLink>
            <Link to="/">
                <Logo />
            </Link>
            <StyledLink to="/terms" style={hasFlex}>
                Terms & Privacy
            </StyledLink>
        </FooterWrapper>
    );
};

export default Footer;
