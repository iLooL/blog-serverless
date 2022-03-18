import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';

import { withStyles } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Hidden from '@mui/material/Hidden';
// import Link from '@mui/material/Link';


// styling for modal
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

// layout styling
const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

function App() {
  // api configs
  const apiUrl = 'https://aqt15rrwbl.execute-api.us-east-1.amazonaws.com/posts';
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState({ isOpen: false, id: ''});

  // cognito user isLogged variables
  const [ status, setStatus ] = useState(sessionStorage.getItem('isLogged'));
  const [ email, setEmail ] = useState(sessionStorage.getItem('email'));

  // get all blog posts
  const getApi = async() => {
    try {
      const response = await axios.get(apiUrl);
      setPosts(response.data.Items)
    } catch(err) {
      console.log(err)
    } 
  }

  const deletePost = async(e) => {
    const id = e.target.getAttribute('name');
    try {
      await axios.delete(`${apiUrl}/${id}`);
      getApi();
    } catch(err) {
      console.log(err);
    }
  }

  // get API 
  useEffect(() => {
    getApi();
    setStatus(sessionStorage.getItem('isLogged'));
    console.log('status: ', status);
    // 
    if (status) {
      // if logged in set email variable
      setEmail(sessionStorage.getItem('email'));
    };
  }, [email]);

  return (
    <>
      <CssBaseline />
      <div className={ 'App ' + styles.layout}>
        { email !==  null ? 
          <>
            <Link to="/newPost">Create Blog Post</Link>
            <Divider />
           </>
          : '' 
        }
        {/* Single section for blog posts of x-tag */}
        <section>
          <Typography variant="h1" variant="h4">'Tag'</Typography>
          <Grid container spacing={2} mb={2} mt={1}>
            { posts.map((post, index) => (
              <Grid item key={index} xs={12} md={6}>
                <Card className={styles.card}>
                  <div className={styles.cardDetails}>
                    <CardContent>
                      <Link to={`blog/${index}`} key={index} state={{post}} style={{ textDecoration: 'none' }}>
                        <Typography component="h2" variant="h5">
                          { post.title }
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          By: { post.author }
                        </Typography>
                      </Link>
                      { email !== null ?
                          <Button name={post.id} onClick={deletePost}>
                            Delete
                          </Button> : ''
                      }
                    </CardContent>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Divider />
        </section>


        {/* old code */}
        {/* { email !==  null ? <Link to="/newPost">Create Blog Post</Link> : '' } */}
        {/* <Stack>
          { posts.map((post, index) => (
            <Box key={index} sx={{ p:2, border: '1px solid black' }}>
              <Link to={`blog/${index}`} key={index} state={{post}}>
                { post.title }
              </Link>
                <p>{ post.author }</p>
                { email !== null ?
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
                  </div> : ''
                }
            </Box>
          ))}
        </Stack> */}
      </div>
    </>
  );
}

export default App;
