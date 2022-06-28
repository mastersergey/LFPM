import { AppBar, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

import { LoginButton } from './LoginButton';

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
          <LoginButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
