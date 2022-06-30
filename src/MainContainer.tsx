import { Container } from '@mui/material';
import FilmList from 'Components/FilmList/FilmList';
import Filter from 'Components/Filter/Filter';
import { LoginModal } from 'Components/Modal/LoginModal';
import { LogOutModal } from 'Components/Modal/LogOutModal';
import React from 'react';

export function MainContainer() {
  return (
    <Container maxWidth="xl" sx={{ display: 'flex', mt: '15px' }}>
      <Filter />
      <FilmList />
      <LoginModal />
      <LogOutModal />
    </Container>
  );
}
