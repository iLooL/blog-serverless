import React, { useState } from 'react';

// local imports 
import { useNavigate } from 'react-router-dom';
import { getCurrentDate } from '../../utils/Date';
import { fetchAllPosts, createPost } from '../../utils/api';
import { useApi } from '../PostsContext';

// 3rd party imports
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const textFieldStyles = {
  mx: 2,
  my: 2,
  rows: 2,
  width: ["70%", "30%"]
}

const NewPost = () => {
  const name = sessionStorage.getItem('name') === undefined ? "Anonymous" : sessionStorage.getItem('name');
  console.log(name);
  const [form, setForm] = useState({
    author: name,
    email: sessionStorage.getItem('email'), 
    date: getCurrentDate(),
    title: '',
    text: '',
    tag: '',
  });
  
  const navigate = useNavigate();
  const { setPosts } = useApi();

  const handleSubmit = async(e) => {
    console.log(form);
    e.preventDefault();
    await createPost(form).then(() =>{
      fetchAllPosts().then((res) => {
          setPosts(res);
      });
    });
    navigate('/');
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleTextChange = (e) => {
    setForm({ ...form, "text": e});
  }


  return (


    <form onSubmit={handleSubmit}>
      <Box sx={{
        display: 'flex', 
        height: "80vh",
        flexDirection: 'column', 
        // alignItems: 'center',
      }}>
        <Typography variant="h5">Create a new blog post</Typography>
          <TextField
            variant="outlined"
            name="title"
            label="Blog Title"
            onChange={handleChange}
            sx={textFieldStyles}
          />
          <Box>
            <ReactQuill theme="snow" name="text" onChange={handleTextChange} />
          </Box>
          <TextField
            variant="outlined"
            name="tag"
            label="Tags"
            onChange={handleChange}
            sx={textFieldStyles}
          />
          <Button variant="outlined" type="submit" sx={{ ml: 2, width: ["70%", "30%"] }}>Publish Post</Button>
      </Box>
    </form>

  );
};

export default NewPost;
