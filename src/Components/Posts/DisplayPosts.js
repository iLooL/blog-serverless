import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { styles } from './PostStyles';
// delete single post based on id
import { deletePost, fetchAllPosts } from '../../utils/api';

const DisplayPosts = ({ posts, setPosts, email, isLoading }) => {

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
        {
          !isLoading ?
          posts.map((post, index) => (
            <Grid item key={index} xs={12} md={6}>
                <Card className={styles.card}>
                    <div className={styles.cardDetails}>
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
                            </Link>
                            { email !== null ?
                                <Button name={post.id} onClick={deletePostAndUpdate}>
                                Delete
                                </Button> : ''
                            }
                        </CardContent>
                    </div>
                </Card>
            </Grid>
        ))
            :
            <div>Loading Posts...</div>
        }
      </>
    )
};

export default DisplayPosts;

