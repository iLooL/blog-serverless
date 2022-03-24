import { useContext, createContext, useState, useEffect } from 'react';
import { fetchAllPosts } from '../utils/api';

const PostsContext = createContext();

const PostsProvider = (props) => {
  const [posts, setPosts] = useState(null);
  const [tag, setTag] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const getPostsData = async() => {
    const postsData = await fetchAllPosts();
    setPosts(postsData);
    setIsLoading(false);
  }

  useEffect(() => {
    getPostsData();
    console.log('updated posts');
  }, []);

  return (
    <PostsContext.Provider value={{ posts, setPosts, isLoading, tag, setTag }}>
      { props.children }
    </PostsContext.Provider>
  )
  
}

const useApi = () => {
  const context = useContext(PostsContext);
  return context;
}

export { PostsProvider, PostsContext, useApi };