import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignUp from './Components/Registration/SignUp';
import Login from './Components/Registration/Login';
import axios from 'axios';

function App() {
  // api configs
  const apiUrl = 'https://aqt15rrwbl.execute-api.us-east-1.amazonaws.com/posts';
  const [posts, setPosts] = useState([]);

  const getApi = async() => {
    try {
      const response = await axios.get(apiUrl);
      setPosts(response.data.Items);
    } catch(err) {
      console.log(err)
    } 
  }

  const deletePost = async(e) => {
    const id = e.target.getAttribute('name');
    try {
      const reponse = await axios.delete(`${apiUrl}/${id}`);
      console.log(reponse);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="App">
      <div>This is a blog</div>
      <SignUp />
      <Login />
      <Link to="/newPost">Create Blog Post</Link>
      { posts.map((post, index) => (
        <div key={index}>
          <Link to={`blog/${index}`} key={index} state={{post}}>
            { post.title }
          </Link>
            <p>{ post.author }</p>
            <a href="/" name={post.id} onClick={deletePost}>Delete</a>
        </div>
      ))}
    </div>
  );
}

export default App;
