import { AppBar, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

import { LoginButton } from './LoginButton';

function Header() {
  return (
    <AppBar component="nav" position="sticky">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              LFMP
            </Link>
          </Typography>
          <LoginButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
