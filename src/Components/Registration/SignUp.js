import { useState } from 'react';
import UserPool from '../User/UserPool';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { textFieldStyles, registrationContainer } from './styles';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
        alert(err);
      };
      console.log(data);
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <Box sx={registrationContainer}>
          <Typography variant="h5">Sign Up</Typography>
          <TextField
              variant="outlined"
              label="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={textFieldStyles}
          />
          <TextField 
              variant="outlined"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={textFieldStyles}
          />
          <Button variant="outlined" type="submit">Submit</Button>
      </Box>
    </form>
    
  )
};

export default SignUp;
