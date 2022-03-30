import React from 'react';

import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import DisplayPosts from './Posts/DisplayPosts';
import { useApi } from './PostsContext';

const Home = () => {

    // send email as props to display posts component
    const email = sessionStorage.getItem('email');
    // get posts from global context
    const { posts, setPosts, isLoading, tag } = useApi();
    
    return (
        <>
        <Box sx={{
            display: "flex",
            justifyContent: "space-evenly",
            my: 10
        }}>
            {
                tag !== null ? 
                <Typography variant="h3">Displaying {tag} posts</Typography> 
                : 
                <Typography variant="h3">Displaying all posts</Typography>
            }

        </Box>
            { email !==  null ? 
                <>
                    <Link to="/newPost">Create Blog Post</Link>
                    <Divider />
                </>
                : '' 
            }
            <DisplayPosts posts={posts} setPosts={setPosts} email={email} isLoading={isLoading} />
        </>
    )
};

export default Home;