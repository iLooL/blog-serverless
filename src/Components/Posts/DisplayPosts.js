import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// delete single post based on id
import { deletePost, fetchAllPosts } from '../../utils/api';

import { cardStyles } from './styles';

const DisplayPosts = ({ posts, setPosts, email, isLoading }) => {

    console.log(email)
    const deletePostAndUpdate = async(e) => {
        const id = e.target.getAttribute('name');
        await deletePost(id).then(() => {
            fetchAllPosts().then((res) => {
                setPosts(res);
            })
        })
    }

    return (
      <>
      <Grid container spacing={2}>
        {
          !isLoading ?
          posts.map((post, index) => (
            <Grid item key={index} xs={12} md={6} spacing={4}>
                <Card sx={cardStyles}>
                        <CardContent>
                            <Link to={`blog/${index}`} key={index} state={{post}} style={{ textDecoration: 'none' }}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    By: { post.author }
                                </Typography>
                                <Typography component="h2" variant="h5">
                                    { post.title }
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Created: { post.date }
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Tag: { post.tag }
                                </Typography>
                            </Link>
                            { console.log(post)}
                            { email === post.email ?
                                <Button name={post.id} onClick={deletePostAndUpdate}>
                                Delete
                                </Button> : ''
                            }
                        </CardContent>
                </Card>
            </Grid>
        ))
            :
            <div>Loading Posts...</div>
        }
        </Grid>
      </>
    )
};

export default DisplayPosts;

