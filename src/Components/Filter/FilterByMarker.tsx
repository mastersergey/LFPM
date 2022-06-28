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
import { setMarkerType } from 'redux/action';

export function FilterByMarker() {
  const isUserLogged = useSelector((state: StateType) => state.isUserLogged);
  const selectValue = useSelector((state: StateType) => state.markerType);
  const dispatch = useDispatch();

  function hundleSwitchMarker(event: SelectChangeEvent) {
    dispatch(setMarkerType(event.target.value));
  }

  if (isUserLogged) {
    return (
      <>
        <Typography
          sx={{
            fontWeight: 400,
            mb: '10px',
          }}
        >
          Избранные:
        </Typography>
        <FormControl sx={{ width: '250px', mb: '20px' }}>
          <Select
            value={selectValue}
            onChange={hundleSwitchMarker}
            displayEmpty
            autoWidth
            size="small"
          >
            <MenuItem value={'None'}>None</MenuItem>
            <MenuItem value={'bookmark'}>Смотреть позже</MenuItem>
            <MenuItem value={'favorite'}>Избранные</MenuItem>
          </Select>
        </FormControl>
      </>
    );
  } else {
    return null;
  }
}
