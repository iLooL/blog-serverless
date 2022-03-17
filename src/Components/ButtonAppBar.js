import { useState, useEffect, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';
import { AccountContext } from './User/Account';


const ButtonAppBar = () => {
  const navigate = useNavigate();
  const [ status, setStatus ] = useState(sessionStorage.getItem('isLogged'));
  const { logout } = useContext(AccountContext);

  const loggedOut = () => {
    logout();
    sessionStorage.removeItem('isLogged');
    setStatus(null);
  }

  useEffect(() => {
    // when user logs in the URL changes and we update the appbar to match the current state
    setStatus(sessionStorage.getItem('isLogged'));
  }, [navigate]);

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography 
              sx={{
                textDecoration: 'none',
                flexGrow: '1',
                '&:hover': {
                  color: 'black',
                }}} 
              variant="h6" component="div" onClick={() => navigate('/')}
              >
              No Niche
            </Typography>
            { status ? 
                <Button variant="outlined" color="error" onClick={() => loggedOut()}>Logout</Button>
              :
              <div>
                <Button variant="outlined" color="error" onClick={() => navigate('/login')}>Login</Button>
                <Button variant="outlined" color="error" onClick={() => navigate('/register')}>Sign Up</Button>
              </div>
            }
            
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default ButtonAppBar;