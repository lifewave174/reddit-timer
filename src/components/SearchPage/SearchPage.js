import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { handleResponse, handleError } from '../../api/apiUtils';
import { defaultSubreddit } from '../../constants';
import SearchForm from './SearchForm';
import Heatmap from './Heatmap';

const SearchPage = () => {
    const history = useHistory();
    const [postsSearch, setSearch] = useState({
        subreddit: defaultSubreddit,
        year: new Date().getFullYear() - 1,
        limit: 500,
    });

    const [topPosts, setTopPosts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const onChange = ({ target }) => {
        setSearch({
            ...postsSearch,
            subreddit: target.value,
        });
    };

    const getTopPosts = () => {
        const url = `https://www.reddit.com/r/${postsSearch.subreddit}/top.json?t=${postsSearch.year}&limit=${postsSearch.limit}`;
        fetch(url)
            .then(handleResponse)
            .then(_topPosts => {
                let apiData = [];
                for (let post of _topPosts) {
                    apiData.push(post.data.title);
                }
                setTopPosts(apiData);
                console.log(topPosts);
            })
            .then(() => setLoading(false))
            .catch(handleError);
    };

    const onSubmit = e => {
        e.preventDefault();
        history.push(`/search/r/${postsSearch.subreddit}`);
        getTopPosts();
        setLoading(true);
    };

    useEffect(() => {
        getTopPosts();
        setLoading(true);
    }, []);

    return (
        <div>
            <SearchForm
                postsSearch={postsSearch}
                onChange={onChange}
                onSubmit={onSubmit}
            />
            <Heatmap topPosts={topPosts} isLoading={isLoading} />
        </div>
    );
};

export default SearchPage;
