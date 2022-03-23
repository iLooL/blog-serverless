import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// MUI imports
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';

import { PostsContext } from './Components/PostsContext';


// helper function imports
import DisplayPosts from './Components/Posts/DisplayPosts';

// component imports
import {API_URL} from './utils/api';

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

function App(props) {

  const test = useContext(PostsContext);
  const [posts, setPosts] = useState([]);

  // cognito user isLogged variables
  const [ status, setStatus ] = useState(sessionStorage.getItem('isLogged'));
  const [ email, setEmail ] = useState(sessionStorage.getItem('email'));

  // get all blog posts
  const getApi = async() => {
    try {
      const response = await axios.get(API_URL);
      setPosts(response.data.Items);
    } catch(err) {
      console.log(err)
    } 
  }

  const deletePost = async(e) => {
    const id = e.target.getAttribute('name');
    try {
      await axios.delete(`${API_URL}/${id}`);
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
      <div className={"App " + styles.layout}>
        { email !==  null ? 
          <>
            <Link to="/newPost">Create Blog Post</Link>
            <Divider />
          </>
          : '' 
        }
        <section>
          <Typography variant="h1" variant="h4">All Blog Posts</Typography>
          <Grid container spacing={2} mb={2} mt={1}>
            <DisplayPosts posts={posts} email={email} deletePost={deletePost} />
          </Grid>
          <Divider />
        </section>
      </div>
    </>
  );
}

export default App;