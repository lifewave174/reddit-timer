import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { SearchSection } from './SearchPage.style';
import PostsSection from '../PostTable/PostsSection';
import { handleResponse, handleError } from '../../../api/apiUtils';
import SearchForm from './SearchForm';
import Heatmap from '../Heatmap/Heatmap';
import { defaultSubreddit } from '../../../constants';
import { StyledLink } from '../../../styling/sharedstyles';

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
                            <StyledLink
                                inputColor={'#0087FF'}
                                as="a"
                                href={`https://reddit.com/${post.data.permalink}`}
                                target="_blank"
                            >
                                {post.data.title.length > 46
                                    ? `${post.data.title.slice(0, 46)}...`
                                    : post.data.title}
                            </StyledLink>
                        ),
                        time: new Date(post.data.created_utc * 1000)
                            .toTimeString()
                            .substring(0, 2),
                        timeForPostTable: new Date(
                            post.data.created_utc * 1000
                        ).toTimeString(),
                        score: post.data.score,
                        comments: post.data.num_comments,
                        author: (
                            <StyledLink
                                inputColor={'#0087FF'}
                                as="a"
                                href={`https://reddit.com/user/${post.data.author}`}
                                target="_blank"
                            >
                                {post.data.author}
                            </StyledLink>
                        ),
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

    const onSubmit = e => {
        e.preventDefault();
        history.push({
            pathname: `/search/${postSearch.subreddit}`,
        });
        getTopPosts();
        setLoading(true);
        setPostsTable(false);
    };

    useEffect(() => {
        getTopPosts();
        setLoading(true);
        setPostsTable(false);

        return () => {
            setTopPosts([]);
        };
    }, []);

    const [postsPerHour, setPostsPerHour] = useState([]);
    const [isPostsTable, setPostsTable] = useState(false);

    const onHourSelect = (day, time) => {
        topPosts.sort((a, b) =>
            a.timeForPostTable > b.timeForPostTable ? 1 : -1
        );
        let _postsPerHour = topPosts.filter(post => {
            return post.day === day && post.time === time;
        });

        setPostsPerHour(_postsPerHour);

        setPostsTable(true);
        if (_postsPerHour.length === 0 || isLoading === true)
            setPostsTable(false);
    };

    return (
        <SearchSection>
            <SearchForm
                postSearch={postSearch}
                onChange={onChange}
                onSubmit={onSubmit}
            />
            <Heatmap
                isLoading={isLoading}
                topPosts={topPosts}
                days={days}
                onHourSelect={onHourSelect}
                postsPerHour={postsPerHour}
            />
            <PostsSection
                postsPerHour={postsPerHour}
                isPostsTable={isPostsTable}
            />
        </SearchSection>
    );
};

export default SearchPage;
