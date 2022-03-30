import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Post = () => {

    const location = useLocation();
    const { post } = location.state;
    console.log(post);
  return (
      <Box>
            <Typography variant="h1">{ post.title }</Typography>
            <Box component="span">Posted By: { post.author }</Box>
            <Typography>{ post.date }</Typography>
            <Divider />
            <Typography variant="body2">
                { post.text }
            </Typography>
      </Box>
  );
};

export default Post;
