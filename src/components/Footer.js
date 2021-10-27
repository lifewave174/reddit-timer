import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../styling/sharedstyles';
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
            <StyledLink>profy.dev</StyledLink>
            <Link>
                <Logo />
            </Link>
            <StyledLink>Terms & Privacy</StyledLink>
        </FooterWrapper>
    );
};

export default Footer;
