import { Container } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import FilmCard from './FilmCard';
import { FilmType } from './filmData';
import { filmsData } from './filmData';

function getCurrentPageList(list: FilmType[], page: number) {
  const pos = page * 10;
  return list.slice(pos - 10, pos);
}

function FilmList() {
  const currentPageList = useSelector((state) =>
    getCurrentPageList(filmsData, Number(state)),
  );

  return (
    <Container maxWidth="xl" sx={{ display: 'grid', gridTemplateColumns: '470px 470px' }}>
      {currentPageList.map(({ vote_average, title, id, poster_path }) => (
        <FilmCard poster={poster_path} vote={vote_average} title={title} key={id} />
      ))}
    </Container>
  );
}

export default FilmList;
