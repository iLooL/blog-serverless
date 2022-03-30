import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const containerStyles = {
    // background: 'teal',

}

const postBody = {
    // background: 'blue',
    fontSize: ["16px", "24px"],
    lineSpacing: "2rem",
    width: ["90%", "70%"],
    mx: "auto",
    mt: 3

}

const Post = () => {

    const location = useLocation();
    const { post } = location.state;
    console.log(post);
  return (
      <Box sx={containerStyles}>
            <Typography variant="h1">{ post.title }</Typography>
            <Box component="span">Posted By: { post.author }</Box>
            <Typography>{ post.date }</Typography>
            <Divider />
            <Typography sx={postBody} variant="body2" dangerouslySetInnerHTML={{__html: post.text}}>
            </Typography>
      </Box>
  );
};

export default Post;
