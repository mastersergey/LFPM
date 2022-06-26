import { Pagination } from '@mui/material';
import { getFilteredData } from 'Components/FilmList/filterData';
import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from 'redux/action';

function FilterPagination() {
  const dispatch = useDispatch();
  const pagesCount = Math.round(getFilteredData().length / 10);

  function hundlePage(event: ChangeEvent<unknown>, page: number) {
    dispatch(setCurrentPage(page));
  }
  return (
    <Pagination
      onChange={hundlePage}
      count={pagesCount}
      variant="text"
      shape="circular"
      size="small"
    />
  );
}

export default FilterPagination;
