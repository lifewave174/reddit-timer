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
    postSearch: PropTypes.arrayOf(
        PropTypes.shape({
            subreddit: PropTypes.string.isRequired,
        })
    ),
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
