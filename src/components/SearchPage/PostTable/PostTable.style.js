import styled, { css } from 'styled-components';

export const PostSection = styled.section`
    width: ${props => props.theme.postsTable.size}px;
    max-width: 100%;
    margin: auto;
`;

export const PostsTable = styled.table`
font-family: ${props => props.theme.font.family.default};
font-size: ${props => props.theme.font.size.default}
border: 1px solid ${props => props.theme.postsTable.borderColor};
border-collapse: collapse;
width: 100%;
`;

export const PostTableRow = styled.tr`
    border: 1px solid ${props => props.theme.postsTable.borderColor};
    padding: 10px;
`;

export const PostTableCells = styled.td`
    border: 1px solid ${props => props.theme.postsTable.borderColor};
    color: ${props => props.theme.color.secondary};
    padding: 10px;
`;

export const PostTableHeader = styled.th`
    font-weight: 500;
    padding: 5px 10px;
    color: ${props => props.theme.color.secondary};
    text-align: left;
    border: 1px solid ${props => props.theme.postsTable.borderColor};
`;

const singleLineEllipsis = css`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const TitleColumn = styled.td`
    width: 373px;
    max-width: 373px;
    padding: 10px;
    ${singleLineEllipsis}
`;

export const AuthorColumn = styled.td`
    width: 129px;
    max-width: 129px;
    padding: 10px;
    ${singleLineEllipsis}
`;
