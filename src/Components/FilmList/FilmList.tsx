import { Container } from '@mui/material';
import React from 'react';

import FilmCard from './FilmCard';
import { filmsData } from './filmData';

function FilmList() {
  return (
    <Container maxWidth="xl" sx={{ display: 'grid', gridTemplateColumns: '470px 470px' }}>
      {filmsData.map((item) => (
        <FilmCard vote={item.vote_average} title={item.title} key={item.id} />
      ))}
    </Container>
  );
}

export default FilmList;
