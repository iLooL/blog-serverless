import { useState, useEffect } from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { Link } from 'react-router-dom';
import axios from 'axios';

function App() {
  // aws cognito configs
  const poolData = {
    UserPoolId: 'us-east-1_mBXV0BDLK',
    ClientId: '32vcth46h7aesnvpt1k5puo95j'
  };
  const UserPool = new CognitoUserPool(poolData);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.log(err);
      console.log(data);
    });
  };

  // api configs
  const apiUrl = 'https://aqt15rrwbl.execute-api.us-east-1.amazonaws.com/posts';
  const [posts, setPosts] = useState([]);

  const getApi = async() => {
    try {
      const response = await axios.get(apiUrl);
      console.log(response.data.Items);
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
    <div>
      <div>This is a blog</div>
      <form onSubmit={onSubmit}>
        <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
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
