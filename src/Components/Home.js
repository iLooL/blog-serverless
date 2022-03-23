import React, { useContext, useEffect } from 'react';

import DisplayPosts from './Posts/DisplayPosts';
// import { PostsProvider, PostsContext } from './PostsContext';
import { useApi } from './PostsContext';

const Home = () => {

    const { posts, isLoading } = useApi();
    console.log('Is loading: ', isLoading);
    console.log('Posts: ', posts);
    

    return (
        <>
            <div>Home</div>
            <DisplayPosts posts={posts} isLoading={isLoading}/>
        </>
    )
};

export default Home;