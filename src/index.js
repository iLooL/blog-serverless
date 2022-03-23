import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewPost from './Components/Posts/NewPost';
import ViewPost from './Components/Posts/ViewPost';
import SignUp from './Components/Registration/SignUp';
import Login from './Components/Registration/Login';
import { Account } from './Components/User/Account';
import Container from '@mui/material/Container';
import ButtonAppBar from './Components/Appbar/ButtonAppBar';

import { PostsContext } from './Components/PostsContext';

ReactDOM.render(
  <React.StrictMode>
    <Container>
        <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);