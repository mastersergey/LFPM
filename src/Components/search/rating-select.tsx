/* eslint-disable no-unused-vars */
import { FormControl, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

type RatingSelectType = {
  onSubmit: (value: string) => void;
};

export function RatingSelect(props: RatingSelectType) {
  const [rating, setRating] = useState('');
  const { onSubmit } = props;

  return (
    <FormControl sx={{ width: '300px', mb: '20px' }}>
      <Select
        value={rating}
        onChange={(e) => {
          setRating(e.target.value);
          onSubmit(e.target.value);
        }}
        displayEmpty
        autoWidth
        size="medium"
      >
        <MenuItem value={'high'}>Высокая</MenuItem>
        <MenuItem value={'low'}>Низкая</MenuItem>
      </Select>
    </FormControl>
  );
}
