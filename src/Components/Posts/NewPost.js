import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getCurrentDate } from '../../utils/Date';
import { fetchAllPosts, createPost } from '../../utils/api';
import { useApi } from '../PostsContext';
// import Editor from './Editor';

const NewPost = () => {
  const [form, setForm] = useState({
    author: 'adam',
    date: getCurrentDate(),
    title: '',
    text: '',
    tag: '',
  });
  
  const navigate = useNavigate();
  const { setPosts } = useApi();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await createPost(form).then(() =>{
      fetchAllPosts().then((res) => {
          setPosts(res);
      });
    });
    // await axios.put(API_URL, form);
    navigate('/');
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
      <div>
          <h1>Create a new blog post</h1>
          <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input name="title" type="text" onChange={handleChange} />
            <label>Blog Text</label>
            <input name="text" type="text" onChange={handleChange} />
            <label>Add a Single Tag</label>
            <input name="tag" type="text" onChange={handleChange} />
            <input type="submit" name="Submit" />
          </form>
      </div>
  );
};

export default NewPost;
