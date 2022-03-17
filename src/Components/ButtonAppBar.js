import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Registration from './Registration/Registration';

// import SignUp from 'Registration/SignUp';
// import Login from 'Registration/Login';

const ButtonAppBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                No Niche
              </Typography>
              <Registration />
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default ButtonAppBar;