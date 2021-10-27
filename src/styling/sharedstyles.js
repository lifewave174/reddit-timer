import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.color.text};
`;

const MainWrapper = styled.section`
    flex-grow: 1;
`;

export { StyledLink, MainWrapper };
