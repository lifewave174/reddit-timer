import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { SearchSection } from './SearchPage.style';
import PostsSection from '../PostTable/PostsSection';
import { handleResponse, handleError } from '../../../api/apiUtils';
import SearchForm from './SearchForm';
import Heatmap from '../Heatmap/Heatmap';
import { defaultSubreddit } from '../../../constants';
import { StyledLink } from '../../../styling/sharedstyles';

const SearchPage = () => {
    //creating a state object for the api search path
    const [postSearch, setSearch] = useState({
        subreddit: defaultSubreddit,
        time: 'year',
        limit: 100,
    });

    //topPosts object here is used to filter out and display the object properties that we need from the api call
    const [topPosts, setTopPosts] = useState([]);

    //loader state below sets the loader to true or false depending on the received api call
    const [isLoading, setLoading] = useState(true);

    //days array is initialized here in order to directly modify the api call and push it to top posts with the days, while also using the array to display the days in the heatmap
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    //onchange function uses the logic of react controlled components in order to catch the form input
    const onChange = ({ target }) => {
        setSearch({
            ...postSearch,
            subreddit: target.value,
        });
    };

    //below is our api call, a big function that uses the while loop to send multiple requests to the api in order to deal with reddit api's pagination
    const getTopPosts = async () => {
        let url = `https://www.reddit.com/r/${postSearch.subreddit}/top.json?t=${postSearch.time}&limit=${postSearch.limit}`;
        let _topPosts = [];
        let after = '';
        try {
            while (_topPosts.length < 500 && after !== null) {
                const apiData = await fetch(url);
                const _data = await handleResponse(apiData);

                //it is important to reassign the url below entirely
                if (_data.after) {
                    url = `https://www.reddit.com/r/${postSearch.subreddit}/top.json?t=${postSearch.time}&limit=${postSearch.limit}&after=${_data.after}`;
                }
                after = _data.after;

                //we are directly pushing a modified version of the posts object that we will use in the heatmap and the posts table
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

                        //we are making another object property for time for the formatted time in the posts table
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

    //initializing history in order to push the pathname to the url onSubmit of the Search form
    const history = useHistory();

    //the submit function here calls the api and also pushes the path name, while setting the loader and post table state
    const onSubmit = e => {
        e.preventDefault();
        history.push({
            pathname: `/search/${postSearch.subreddit}`,
        });
        getTopPosts();
        setLoading(true);
        setPostsTable(false);
    };

    //useEffect calls the api on load and sets the loader and post table state
    useEffect(() => {
        getTopPosts();
        setLoading(true);
        setPostsTable(false);

        return () => {
            setTopPosts([]);
        };
    }, []);

    //initializing a state for posts per hour, which will populate upon the onHourSelect function below
    const [postsPerHour, setPostsPerHour] = useState([]);

    //depending on whether there are any posts per hour, the isPostsTable state below sets the table display state
    const [isPostsTable, setPostsTable] = useState(false);

    //onHourSelect function below filters out the posts based on the day and time from the topPosts object
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
