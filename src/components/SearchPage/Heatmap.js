import React from 'react';
import Loader from '../common/Loader';
import RenderedTable from './RenderedTable';

const Heatmap = ({ topPosts, isLoading, days }) => {
    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <RenderedTable topPosts={topPosts} days={days} />
            )}
        </div>
    );
};

export default Heatmap;
