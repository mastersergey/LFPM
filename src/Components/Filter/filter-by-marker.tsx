import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { StateType } from 'components/film-list/film-list';
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
