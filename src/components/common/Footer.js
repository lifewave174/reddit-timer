import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/sign.svg';

const FooterWrapper = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-around;
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
