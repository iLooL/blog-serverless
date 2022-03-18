import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getCurrentDate } from '../utils/Date';
// import Editor from './Editor';

const NewPost = () => {
  const apiUrl = 'https://aqt15rrwbl.execute-api.us-east-1.amazonaws.com/posts';
  const [form, setForm] = useState({
    author: 'adam',
    date: getCurrentDate(),
    title: '',
    text: '',
    tag: '',
  });
  
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(form);
    await axios.put(apiUrl, form);
    console.log(form);
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
