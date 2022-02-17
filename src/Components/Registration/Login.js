import { useState } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../User/UserPool';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const user = new CognitoUser({
        Username: email,
        Pool: UserPool
    });

    const authDetails = new AuthenticationDetails({
        Username: email,
        Password: password
    });

    user.authenticateUser(authDetails, {
        onSuccess: data => {
            console.log('onSuccess: ', data);
        },

        onFailure: err => {
            console.error('onFailure: ', err);
        },

        newPasswordRequired: data => {
            console.log('newPasswordRequired: ', data);
        }
    });
  };

  return (
  <form onSubmit={onSubmit}>
      <div>LOGIN</div>
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
    <Button type="submit">Log In</Button>
  </form>
  );
};

export default Login;
