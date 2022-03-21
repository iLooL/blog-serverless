
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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

const DisplayPosts = ({ posts, email, deletePost }) => {
    return (
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
                                <Button name={post.id} onClick={deletePost}>
                                Delete
                                </Button> : ''
                            }
                        </CardContent>
                    </div>
                </Card>
            </Grid>
        ))
    )
};

export default DisplayPosts;

