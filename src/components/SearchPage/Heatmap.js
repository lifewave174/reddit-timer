import React from 'react';
import Loader from '../common/Loader';

const Heatmap = ({ topPosts, isLoading }) => {
    return <div>{isLoading ? <Loader /> : 'here is my table!'}</div>;
};

export default Heatmap;
