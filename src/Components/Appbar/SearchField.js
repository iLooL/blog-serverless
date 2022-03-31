import { useState, useContext } from 'react';

// mui imports
import TextField from '@mui/material/TextField';

// local imports
import { fetchFilteredPosts } from '../../utils/api';
import { PostsContext } from '../PostsContext';

const SearchField = () => {

    const [ tagFilter, setTagFilter ] = useState('');
    const { setPosts, setTag } = useContext(PostsContext);

    const getFilteredPosts = async(tagFilter) => {
        await fetchFilteredPosts(tagFilter).then((filteredPosts) => {
            // do not update if invalid tag was entered
            if (filteredPosts.length > 0) {
                console.log(filteredPosts)
                setPosts(filteredPosts);
                setTag(tagFilter);
            } else {
                alert(`No posts with the tag ${tagFilter}`);
            }
        })
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (tagFilter !== '') {
                getFilteredPosts(tagFilter);
            }
        }
    };

    return (
        <>
            <TextField 
                placeholder="Enter a tag..." 
                size="small" sx={{ flexGrow: 5, background: "white" }} 
                onChange={(e) => setTagFilter(e.target.value)} onKeyDown={handleKeyDown} 
            />
        </>
    )
}

export default SearchField;