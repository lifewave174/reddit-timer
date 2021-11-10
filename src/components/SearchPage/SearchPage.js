import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { handleResponse, handleError } from '../../api/apiUtils';
import SearchForm from './SearchForm';
import Heatmap from './Heatmap';
import { defaultSubreddit } from '../../constants';

const SearchPage = () => {
    const history = useHistory();
    const [postSearch, setSearch] = useState({
        subreddit: defaultSubreddit,
        time: 'year',
        limit: 100,
    });

    const [topPosts, setTopPosts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const onChange = ({ target }) => {
        setSearch({
            ...postSearch,
            subreddit: target.value,
        });
    };

    const getTopPosts = async () => {
        let url = `https://www.reddit.com/r/${postSearch.subreddit}/top.json?t=${postSearch.time}&limit=${postSearch.limit}`;
        let _topPosts = [];
        let after = '';
        while (_topPosts.length < 500 && after !== null) {
            const apiData = await fetch(url);
            const _data = await handleResponse(apiData);
            if (_data.after) {
                url = `https://www.reddit.com/r/${postSearch.subreddit}/top.json?t=${postSearch.time}&limit=${postSearch.limit}&after=${_data.after}`;
            }
            after = _data.after;
            console.log(after);

            for (let post of _data.children) {
                _topPosts.push(post.data.title);
            }
            setTopPosts(_topPosts);
        }
        setLoading(false);
    };

    const onSubmit = e => {
        e.preventDefault();
        history.push({
            pathname: `/search/${postSearch.subreddit}`,
        });
        getTopPosts();
        setLoading(true);
    };

    useEffect(() => {
        getTopPosts();
        setLoading(true);

        return () => {
            setTopPosts([]);
        };
    }, []);

    return (
        <div>
            <SearchForm
                postSearch={postSearch}
                onChange={onChange}
                onSubmit={onSubmit}
            />
            <Heatmap topPosts={topPosts} isLoading={isLoading} />
        </div>
    );
};

export default SearchPage;
