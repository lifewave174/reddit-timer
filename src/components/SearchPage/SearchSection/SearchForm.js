import React from 'react';
import PropTypes from 'prop-types';

import { H1, Button } from '../../../styling/sharedstyles';
import { Search, Input } from './SearchPage.style';

const SearchForm = ({ postSearch, onChange, onSubmit }) => {
    return (
        <Search>
            <H1>Find the best time for a subreddit</H1>
            <form onSubmit={onSubmit}>
                r/
                <Input
                    type="text"
                    value={postSearch.subreddit}
                    onChange={onChange}
                ></Input>
                <Button>Search</Button>
            </form>
        </Search>
    );
};

SearchForm.propTypes = {
    postSearch: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
