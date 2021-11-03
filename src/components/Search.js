import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { H1, Button } from '../styling/sharedstyles';
import { defaultSubreddit } from '../constants';

const SearchPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const SubmitButton = styled.input`
    background-color: #fdb755;
    color: white;
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 8px 11px;
    border: 0px;
    border-radius: 5px;
    margin: 26px 0px;
    text-decoration: none;
`;

const Search = () => {
    const history = useHistory();
    const [topPosts, setPosts] = useState({
        subreddit: defaultSubreddit,
        year: new Date().getFullYear() - 1,
        limit: 500,
    });

    const onChange = ({ target }) => {
        setPosts({
            ...topPosts,
            subreddit: target.value,
        });
    };

    const onSubmit = async e => {
        e.preventDefault();
        history.push(`/search/r/${topPosts.subreddit}`);
    };

    return (
        <SearchPage>
            <H1>Find the best time for a subreddit</H1>
            <form onSubmit={onSubmit}>
                r/
                <input
                    type="text"
                    value={topPosts.subreddit}
                    onChange={onChange}
                ></input>
                <SubmitButton type="submit" value="search" />
            </form>
        </SearchPage>
    );
};

export default Search;
