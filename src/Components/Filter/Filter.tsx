import { Box, Typography } from '@mui/material';
import React from 'react';

import FilterPagination from './FilterPagination';
import Genres from './Genres';
import ResetButton from './ResetButton';
import SortByRating from './SortByRating';
import SortByYear from './SortByYear';

function Filter() {
  return (
    <Box
      sx={{
        width: '320px',
        height: '620px',
        padding: '20px',
        borderRadius: '7px',
        boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
      }}
    >
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
    </Box>
  );
}

export default Filter;
