import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  // api configs
  const apiUrl = 'https://aqt15rrwbl.execute-api.us-east-1.amazonaws.com/posts';
  const [posts, setPosts] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getApi = async() => {
    try {
      const response = await axios.get(apiUrl);
      setPosts(response.data.Items)
      console.log(response.data.Items)
    } catch(err) {
      console.log(err)
    } 
  }

  const deletePost = async(e) => {
    const id = e.target.getAttribute('name');
    try {
      await axios.delete(`${apiUrl}/${id}`);
      handleClose();
      getApi();
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="App">
      <Link to="/newPost">Create Blog Post</Link>
      <Stack>
        { posts.map((post, index) => (
          <Box key={index} sx={{ p:2, border: '1px solid black' }}>
            <Link to={`blog/${index}`} key={index} state={{post}}>
              { post.title }
            </Link>
              <p>{ post.author }</p>
              <div>
                <Button onClick={handleOpen}>Delete</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description">
                  <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>Are you sure you want to delete?</Typography>
                    <Button name={post.id} onClick={deletePost}>
                      Delete
                    </Button>
                  </Box>
                </Modal>
              </div> 
          </Box>
        ))}
      </Stack>
    </div>
  );
}

export default App;
