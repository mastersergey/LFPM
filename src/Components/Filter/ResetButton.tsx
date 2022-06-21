import { Button } from '@mui/material';
import React from 'react';

function ResetButton() {
  return (
    <Button
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
