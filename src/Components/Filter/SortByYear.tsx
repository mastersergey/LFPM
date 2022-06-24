import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { StateType } from 'Components/FilmList/FilmList';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setYearFilter } from 'redux/action';

function SortByYear() {
  const currentYear = useSelector((state: StateType) => state.yearFilter);
  const dispatch = useDispatch();

  function hundleSwitchYear(event: SelectChangeEvent) {
    dispatch(setCurrentPage(1));
    dispatch(setYearFilter(Number(event.target.value)));
  }

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
        <Select
          value={currentYear}
          displayEmpty
          autoWidth
          size="small"
          onChange={hundleSwitchYear}
        >
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2018}>2018</MenuItem>
          <MenuItem value={2017}>2017</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default SortByYear;
