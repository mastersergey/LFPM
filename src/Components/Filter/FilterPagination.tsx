import { Pagination } from '@mui/material';
import { getFilteredData } from 'Components/FilmList/filterData';
import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from 'redux/action';

function FilterPagination() {
  const dispatch = useDispatch();

  function hundlePage(event: ChangeEvent<unknown>, page: number) {
    dispatch(setCurrentPage(page));
  }
  return (
    <Pagination
      onChange={hundlePage}
      count={getFilteredData().length / 10}
      variant="text"
      shape="circular"
      size="small"
    />
  );
}

export default FilterPagination;
