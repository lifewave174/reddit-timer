import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { H1, Button } from '../styling/sharedstyles';
import { defaultSubreddit } from '../constants';

const SearchPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
`;

const Input = styled.input`
    border: 1px solid #e6e6e6;
    border-radius: 1px;
    height: 36px;
    width: 370px;
    margin: 10px;
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

    const onSubmit = e => {
        e.preventDefault();
        history.push(`/search/r/${topPosts.subreddit}`);
    };

    return (
        <SearchPage>
            <H1>Find the best time for a subreddit</H1>
            <form onSubmit={onSubmit}>
                r/
                <Input
                    type="text"
                    value={topPosts.subreddit}
                    onChange={onChange}
                ></Input>
                <Button>Search</Button>
            </form>
        </SearchPage>
    );
};

export default Search;
