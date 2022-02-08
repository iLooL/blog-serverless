import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const tempPosts = [
  {
    "title": "This is a blog post 1",
    "author": "Adam",
    "content": "This is an amazing blog post wow im so cool"
  },
  {
    "title": "This is a blog post 2",
    "author": "Jame",
    "content": "This is an amazing blog post wow im so cool"
  },
  {
    "title": "This is a blog post 3",
    "author": "Dane",
    "content": "This is an amazing blog post wow im so cool"
  },
]

function App() {
  const apiUrl = 'https://43vb730lii.execute-api.us-east-1.amazonaws.com/test';
  const [result, setResult] = useState();
  const [posts, setPosts] = useState([]);

  const getApi = async() => {
    try {
      const data = { "name" : "Mike" };
      const response = await axios.post(apiUrl, data);
      setResult(response.data.body);
    } catch(err) {
      console.log(err)
    } 
  }

  useEffect(() => {
    getApi();
    setPosts(tempPosts);
  }, []);

  return (
    <div>
      <div>This is a blog</div>
      <Link to="/newPost">Create Blog Post</Link>
      { posts.map((post, index) => (
        <Link to={`blog/${index}`} key={index} state={{post}}>
          <div>
            <h1>{ post.title }</h1>
            <p>{ post.author }</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default App;
