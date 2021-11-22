import styled from 'styled-components';

export const PostSection = styled.section`
    width: ${props => props.theme.postsTable.size}px;
    margin: auto;
`;

export const PostsTable = styled.table`
font-family: ${props => props.theme.font.family.default};
font-size: ${props => props.theme.font.size.default}
border: 1px solid #dddddd;
border-collapse: collapse;
width: 100%;
`;

export const PostTableRow = styled.tr`
    border: 1px solid #dddddd;
    padding: 10px;
`;

export const PostTableCells = styled.td`
    border: 1px solid #dddddd;
    color: ${props => props.theme.color.secondary};
    padding: 10px;
`;

export const PostTableHeader = styled.th`
    font-weight: 500;
    padding: 5px 10px;
    color: ${props => props.theme.color.secondary};
    text-align: left;

    border: 1px solid #dddddd;
`;
