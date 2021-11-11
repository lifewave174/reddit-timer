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
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
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
        try {
            while (_topPosts.length < 500 && after !== null) {
                const apiData = await fetch(url);
                const _data = await handleResponse(apiData);
                if (_data.after) {
                    url = `https://www.reddit.com/r/${postSearch.subreddit}/top.json?t=${postSearch.time}&limit=${postSearch.limit}&after=${_data.after}`;
                }
                after = _data.after;

                _data.children.map(post => {
                    _topPosts.push({
                        title: (
                            <a href={post.data.permalink} target="_blank">
                                {post.data.title}
                            </a>
                        ),
                        time: new Date(post.data.created_utc * 1000)
                            .toTimeString()
                            .substring(0, 2),
                        score: post.data.score,
                        comments: post.data.num_comments,
                        author: post.data.author,
                        day: days[
                            new Date(post.data.created_utc * 1000).getDay()
                        ],
                    });
                });

                setTopPosts(_topPosts);
            }
        } catch {
            handleError;
        } finally {
            setLoading(false);
        }
    };

    console.log(topPosts);

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
            <Heatmap isLoading={isLoading} topPosts={topPosts} days={days} />
        </div>
    );
};

export default SearchPage;
