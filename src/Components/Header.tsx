import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

function Header() {
  return (
    <AppBar component="nav" position="sticky" sx={{ mb: '15px' }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            LFMP
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button
              variant="contained"
              sx={{
                color: '#fff',
                backgroundColor: 'green',
                ':hover': {
                  backgroundColor: 'green',
                },
              }}
            >
              login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
