import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Wrapper = styled.div`
    width: 100vw;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = () => {
    return (
        <Wrapper>
            <Logo />
        </Wrapper>
    );
};

export default Header;
