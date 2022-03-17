import { useState, useContext } from 'react';
import { AccountContext } from '../User/Account';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authenticate } = useContext(AccountContext);

  const onSubmit = (e) => {
    e.preventDefault();
    authenticate(email, password)
        .then((data) => {
            console.log("logged in: ", data);
        }).catch((err) => {
            console.log("Failed logging in: ", err);
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
