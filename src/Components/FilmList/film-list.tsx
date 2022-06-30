import { Container } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import FilmCard from './film-card';
import { FilmType } from './film-data';
import { useFilteredData } from './filter-films';

export type StateType = {
  currentPage: number;
  sortType: string;
  yearFilter: never;
  genresList: number[];
  loginModal: boolean;
  logoutModal: boolean;
  isUserLogged: boolean;
  markerType: string;
};

function getCurrentPageList(list: FilmType[], page: number) {
  const pos = page * 10;
  return list.slice(pos - 10, pos);
}

function FilmList() {
  const filmsData = useFilteredData();
  const currentPageList = useSelector((state: StateType) =>
    getCurrentPageList(filmsData, Number(state.currentPage)),
  );

  return (
    <Container maxWidth="xl" sx={{ display: 'grid', gridTemplateColumns: '470px 470px' }}>
      {currentPageList.map((film: FilmType) => (
        <FilmCard film={film} key={film.id} />
      ))}
    </Container>
  );
}

export default FilmList;
