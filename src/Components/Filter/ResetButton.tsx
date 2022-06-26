import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { resetGenre, setSortType, setYearFilter } from 'redux/action';

function ResetButton() {
  const dispatch = useDispatch();

  function hundleReset() {
    dispatch(setSortType('popularFirst'));
    dispatch(setYearFilter(2020));
    dispatch(resetGenre());
  }

  return (
    <Button
      onClick={hundleReset}
      variant="contained"
      size="small"
      sx={{
        backgroundColor: 'gray',
        mb: '10px',
      }}
    >
      Сбросить все фильтры
    </Button>
  );
}

export default ResetButton;
