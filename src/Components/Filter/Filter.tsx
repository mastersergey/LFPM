import { Box, Typography } from '@mui/material';
import React from 'react';

import { FilterByMarker } from './filter-by-marker';
import FilterPagination from './filter-pagination';
import Genres from './genres/genres-list';
import ResetButton from './reset-button';
import SortByRating from './sort-by-rating';
import SortByYear from './sort-by-year';

function Filter() {
  return (
    <Box
      sx={{
        width: '320px',
        height: '100%',
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
      <FilterByMarker />
      <SortByRating />
      <SortByYear />
      <Genres />
      <FilterPagination />
    </Box>
  );
}

export default Filter;
