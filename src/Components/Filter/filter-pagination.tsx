import { Pagination } from '@mui/material';
import { StateType } from 'Components/FilmList/film-list';
import { useFilteredData } from 'Components/FilmList/filter-films';
import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from 'redux/action';

function FilterPagination() {
  const dispatch = useDispatch();
  const filmsData = useFilteredData();
  const currentPage = useSelector((state: StateType) => state.currentPage);
  const pagesCount = Math.round(filmsData.length / 10);

  function hundlePage(event: ChangeEvent<unknown>, page: number) {
    dispatch(setCurrentPage(page));
  }
  return (
    <Pagination
      page={currentPage}
      onChange={hundlePage}
      count={pagesCount}
      variant="text"
      shape="circular"
      size="small"
    />
  );
}

export default FilterPagination;
