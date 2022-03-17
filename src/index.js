import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewPost from './Components/NewPost';
import Post from './Components/Post';
import Registration from './Components/Registration/Registration';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> } />
        <Route path="/newPost" element={ <NewPost /> } />
        <Route path="/blog/:postId" element={ <Post /> } />
        <Route path="/registration" element={ <Registration /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);