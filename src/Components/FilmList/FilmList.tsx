import { Container } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

import FilmCard from './FilmCard';
import { FilmType } from './filmData';
import { getFilteredData } from './filterData';

export type StateType = {
  currentPage: number;
  sortType: string;
  yearFilter: never;
};

function getCurrentPageList(list: FilmType[], page: number) {
  const pos = page * 10;
  return list.slice(pos - 10, pos);
}

function FilmList() {
  const currentPageList = useSelector((state: StateType) =>
    getCurrentPageList(getFilteredData(), Number(state.currentPage)),
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
