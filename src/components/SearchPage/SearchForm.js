import styled from 'styled-components';

import { H1, Button } from '../../styling/sharedstyles';

const Search = styled.div`
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

export default SearchForm;
