import { useState } from 'react';
import UserPool from '../User/UserPool';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
          <div>SIGN UP</div>
          <TextField
              variant="outlined"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <TextField 
              variant="outlined"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Submit</Button>
      </Box>
    </form>
    
  )
};

export default SignUp;
