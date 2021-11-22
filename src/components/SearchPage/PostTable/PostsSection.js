import React from 'react';

import PostTable from './PostTable';
import { PostSection } from './PostTable.style';

const PostsSection = ({ isPostsTable, postsPerHour }) => {
    return (
        <PostSection>
            {isPostsTable ? <PostTable postsPerHour={postsPerHour} /> : null}
        </PostSection>
    );
};

export default PostsSection;
