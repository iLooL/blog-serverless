import { useState, useContext } from 'react';
import { AccountContext } from '../User/Account';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { textFieldStyles, registrationContainer } from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authenticate } = useContext(AccountContext);

  const onSubmit = (e) => {
    e.preventDefault();
    authenticate(email, password)
        .then((data) => {
            sessionStorage.setItem('isLogged', true);
        }).catch((err) => {
            console.log("Failed logging in: ", err);
            alert(err);
        });
  };

  return (
    <form onSubmit={onSubmit}>
        <Box sx={registrationContainer}>
            <Typography variant="h5">Login</Typography>
            <TextField
                variant="outlined"
                name="email"
                label="Email"
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
            <Button variant="outlined" type="submit">Log In</Button>
        </Box>
    </form> 
  );
};

export default Login;
