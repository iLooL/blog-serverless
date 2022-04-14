import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserPool from '../User/UserPool';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { textFieldStyles, registrationContainer } from './styles';
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    let nameAttrib = new CognitoUserAttribute({
      Name: 'name',
      Value: name
    });
    console.log(nameAttrib);
    UserPool.signUp(email, password, [nameAttrib], null, (err, data) => {
      if (err) {
        console.error(err);
        alert(err);
      } else {
        console.log(data);
        navigate('/login');
      }
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <Box sx={registrationContainer}>
          <Typography variant="h5">Sign Up</Typography>
          <TextField
              variant="outlined"
              label="Name"
              name="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={textFieldStyles}
          />
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
