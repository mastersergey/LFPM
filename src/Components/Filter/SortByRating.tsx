import { FormControl, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';

function SortByRating() {
  return (
    <>
      <Typography
        sx={{
          fontWeight: 400,
          mb: '10px',
        }}
      >
        Сортировка по:
      </Typography>
      <FormControl sx={{ minWidth: '250px', mb: '20px' }}>
        <Select displayEmpty autoWidth size="small">
          <MenuItem>None</MenuItem>
          <MenuItem value={10}>По убыванию рейтинга</MenuItem>
          <MenuItem value={20}>По возрастанию рейтинга</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default SortByRating;
