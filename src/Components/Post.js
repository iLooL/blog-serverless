import React from 'react';
import { useLocation } from 'react-router-dom';

const Post = () => {

    const location = useLocation();
    const { post } = location.state;
    console.log(post);
  return (
      <div>
          <h1>{ post.title }</h1>
          <span>{ post.author }</span>
          <p>{ post.content }</p>
      </div>
  );
};

export default Post;
