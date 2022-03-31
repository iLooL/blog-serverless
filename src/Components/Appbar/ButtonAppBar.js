import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// mui imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// local imports
import { AccountContext } from '../User/Account';
import SearchField from './SearchField';


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
      <Box sx={{ flexGrow: 1 }} mb={1}>
        <AppBar position="static" sx={{ background: '#2E3B55' }}>
          <Toolbar>
            <Typography 
              sx={{
                textDecoration: 'none',
                flexGrow: 1,
                '&:hover': {
                  color: 'white',
                }}} 
              variant="h6" component="div" onClick={() => navigate('/')}
              >
              No Niche
            </Typography>
            <SearchField />
            { status ? 
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-evenly' }} mx={2}>
                  <Button variant="outlined" onClick={() => loggedOut()}>Logout</Button>
                  {/* <Button variant="outlined" onClick={() => navigate('/account')}>Account</Button> */}
              </Box>
              :
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-evenly' }} mx={2}>
                <Button variant="outlined" onClick={() => navigate('/login')}>Login</Button>
                <Button variant="outlined" onClick={() => navigate('/register')}>Sign Up</Button>
              </Box>
            }
            
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default ButtonAppBar;