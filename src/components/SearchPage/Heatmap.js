import React from 'react';
import Loader from '../common/Loader';

const Heatmap = ({ topPosts, isLoading }) => {
    const renderedPosts = topPosts.map(post => {
        return (
            <ul>
                <li key={post}>{post}</li>
            </ul>
        );
    });

    return <div>{isLoading ? <Loader /> : renderedPosts} </div>;
};

export default Heatmap;
