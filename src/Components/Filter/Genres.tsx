import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';

import genresData from './data';

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
        <FormControlLabel control={<Checkbox size="small" />} key={item} label={item} />
      ))}
    </FormGroup>
  );
}

export default Genres;
