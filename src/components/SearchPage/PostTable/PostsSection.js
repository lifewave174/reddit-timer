import React from 'react';

import PostTable from './PostTable';
import { PostSection } from './PostTable.style';

const PostsSection = ({ isPostsTable, postsPerHour }) => {
    return (
        <PostSection>
            <PostTable postsPerHour={postsPerHour} />
        </PostSection>
    );
};

export default PostsSection;
