import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';

import genresData from './genresData';

function Genres() {
  return (
    <FormGroup
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        mb: '30px',
        maxHeight: 300,
      }}
    >
      {genresData.map((item) => (
        <FormControlLabel
          control={<Checkbox size="small" />}
          key={item.id}
          label={item.name}
        />
      ))}
    </FormGroup>
  );
}

export default Genres;
