import React, { useContext, useState } from 'react';

const PostsContext = React.useContext();

const Posts = () => {

    const [posts, setPosts] = useState(['posts']); 
    return (
        <PostsContext.Provider value={{posts, setPosts}}>
            { children }
        </PostsContext.Provider>
    )
}

export { Posts, PostsContext };
