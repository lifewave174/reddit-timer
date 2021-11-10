import React from 'react';
import Loader from '../common/Loader';

const Heatmap = ({ topPosts, isLoading }) => {
    const Table = styled.table``;

    const Thead = styled.thead``;

    const Tr = styled.tr``;

    return <div>{isLoading ? <Loader /> : <Table />} </div>;
};

export default Heatmap;
