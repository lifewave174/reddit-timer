import React, { createContext, useState } from 'react';
import { handleResponse, handleError } from '../../api/apiUtils';
import { defaultSubreddit } from '../../constants';

export const Context = createContext();

const GlobalState = ({ children }) => {
    const [postSearch, setSearch] = useState({
        subreddit: defaultSubreddit,
        time: 'year',
        limit: 100,
    });
    const [topPosts, setTopPosts] = useState([]);
    const [isLoading, setLoading] = useState(true);

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

            for (let post of _data.children) {
                _topPosts.push(post.data.title);
            }
            setTopPosts(_topPosts);
        }
        setLoading(false);
    };

    return (
        <GlobalState.Provider
            value={
                (postSearch,
                setSearch,
                topPosts,
                setTopPosts,
                isLoading,
                setLoading,
                getTopPosts)
            }
        >
            {children}
        </GlobalState.Provider>
    );
};

export default GlobalState;
