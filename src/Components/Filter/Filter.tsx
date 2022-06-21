import { Typography } from '@mui/material';
import React from 'react';

import FilterPagination from './FilterPagination';
import Genres from './Genres';
import ResetButton from './ResetButton';
import SortByRating from './SortByRating';
import SortByYear from './SortByYear';

function Filter() {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 500,
          mb: '10px',
        }}
      >
        Фильтры:
      </Typography>
      <ResetButton />
      <SortByRating />
      <SortByYear />
      <Genres />
      <FilterPagination />
    </>
  );
}

export default Filter;
