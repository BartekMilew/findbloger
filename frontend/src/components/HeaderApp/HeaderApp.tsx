import { Box } from '@mui/system'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Button, Container, Toolbar, Typography } from '@mui/material';

function HeaderApp() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
        <Container >
          <Toolbar variant="dense"> 
           
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Tabs
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
          </Container>
        </AppBar>
      </Box>
    )
}

export default HeaderApp
