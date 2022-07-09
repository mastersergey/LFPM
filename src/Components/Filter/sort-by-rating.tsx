import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { StateType } from 'components/film-list/film-list';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortType } from 'redux/action';

function SortByRating() {
  const currentFilter = useSelector((state: StateType) => String(state.sortType));
  const dispatch = useDispatch();

  function hunleSwitchSort(event: SelectChangeEvent) {
    dispatch(setSortType(event.target.value));
  }

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
      <FormControl sx={{ width: '250px', mb: '20px' }}>
        <Select
          value={currentFilter}
          onChange={hunleSwitchSort}
          displayEmpty
          autoWidth
          size="small"
        >
          <MenuItem value={'popularFirst'}>Популярные по убыванию</MenuItem>
          <MenuItem value={'popularLast'}>Популярные по возрастанию</MenuItem>
          <MenuItem value={'ratingFirst'}>Рейтинг по убыванию</MenuItem>
          <MenuItem value={'ratingLast'}>Рейтинг по возрастанию</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default SortByRating;
