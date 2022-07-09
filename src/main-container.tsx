import { Container } from '@mui/material';
import FilmList from 'components/film-list/film-list';
import Filter from 'components/filter/filter';
import React from 'react';

export function MainContainer() {
  return (
    <Container maxWidth="xl" sx={{ display: 'flex', mt: '15px' }}>
      <Filter />
      <FilmList />
    </Container>
  );
}
