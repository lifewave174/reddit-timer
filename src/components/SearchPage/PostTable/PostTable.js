import React from 'react';
import styled from 'styled-components';
import { H1 } from '../../../styling/sharedstyles';

const PostTable = ({ postsPerHour }) => {
    const PostSection = styled.section`
        width: 786px;
        margin: auto;
    `;

    const PostsTable = styled.table`
    font-family: ${props => props.theme.font.family.default};
    font-size: ${props => props.theme.font.size.default}
    border: 1px solid #dddddd;
    border-collapse: collapse;
`;

    const PostTableRow = styled.tr`
        border: 1px solid #dddddd;
        padding: 10px;
    `;

    const PostTableCells = styled.td`
        border: 1px solid #dddddd;
        color: ${props => props.theme.color.secondary};
        padding: 10px;
    `;

    const PostTableHeader = styled.th`
        font-weight: 500;
        padding: 5px 10px;
        color: ${props => props.theme.color.secondary};
        text-align: left;

        border: 1px solid #dddddd;
    `;

    return (
        <PostSection>
            <H1>Posts</H1>
            <PostsTable>
                <thead>
                    <PostTableRow>
                        <PostTableHeader>Title</PostTableHeader>
                        <PostTableHeader>Time Posted</PostTableHeader>
                        <PostTableHeader>Score</PostTableHeader>
                        <PostTableHeader>Comments</PostTableHeader>
                        <PostTableHeader>Author</PostTableHeader>
                    </PostTableRow>
                </thead>
                <tbody>
                    {postsPerHour.map(posts => {
                        return (
                            <PostTableRow>
                                <PostTableCells>{posts.title}</PostTableCells>
                                <PostTableCells>{posts.time}</PostTableCells>
                                <PostTableCells>{posts.score}</PostTableCells>
                                <PostTableCells>
                                    {posts.comments}
                                </PostTableCells>
                                <PostTableCells>{posts.author}</PostTableCells>
                            </PostTableRow>
                        );
                    })}
                </tbody>
            </PostsTable>
        </PostSection>
    );
};

export default PostTable;
