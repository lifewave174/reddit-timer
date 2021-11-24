import React from 'react';

import PostTable from './PostTable';
import { PostSection } from './PostTable.style';

const PostsSection = ({ isPostsTable, postsPerHour }) => {
    //below we are using conditional rendering to check if there are any posts on a particular day or time or not
    return (
        <PostSection>
            {isPostsTable ? <PostTable postsPerHour={postsPerHour} /> : null}
        </PostSection>
    );
};

PostsSection.propTypes = {
    isPostsTable: PropTypes.bool.isRequired,
    postsPerHour: PropTypes.array.isRequired,
};

export default PostsSection;
