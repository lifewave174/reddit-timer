import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/logo.svg';

const FooterWrapper = styled.div`
    height: 100px;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const FooterSection = styled.div``;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterSection>profy.dev</FooterSection>
            <FooterSection>
                <Logo />
            </FooterSection>
            <FooterSection>Terms & Privacy</FooterSection>
        </FooterWrapper>
    );
};

export default Footer;
