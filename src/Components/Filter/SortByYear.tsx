import { FormControl, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';

function SortByYear() {
  return (
    <>
      <Typography
        sx={{
          fontWeight: 400,
          mb: '10px',
        }}
      >
        Год релиза:
      </Typography>
      <FormControl sx={{ minWidth: '250px', mb: '20px' }}>
        <Select displayEmpty autoWidth size="small">
          <MenuItem>None</MenuItem>
          <MenuItem value={10}>2022</MenuItem>
          <MenuItem value={20}>2021</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default SortByYear;
