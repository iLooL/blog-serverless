import { useContext, createContext, useState, useEffect } from 'react';
import { getApi } from '../utils/api';

const PostsContext = createContext();

const PostsProvider = (props) => {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getPostsData = async() => {
    const postsData = await getApi();
    setPosts(postsData);
    setIsLoading(false);
  }

  useEffect(() => {
    getPostsData();

    // setPosts(data);
  }, []);

  return (
    <PostsContext.Provider value={{ posts, setPosts, isLoading }}>
      { props.children }
    </PostsContext.Provider>
  )
  
}

const useApi = () => {
  const context = useContext(PostsContext);
  return context;
}

export { PostsProvider, PostsContext, useApi };