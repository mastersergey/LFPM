/* eslint-disable no-unused-vars */
import { FormControl, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

type PopularSelectType = {
  onSubmit: (value: string) => void;
};

export function PopularSelect(props: PopularSelectType) {
  const { onSubmit } = props;
  const [popular, setPopular] = useState('');

  return (
    <FormControl sx={{ width: '300px', mb: '20px' }}>
      <Select
        value={popular}
        onChange={(e) => {
          onSubmit(e.target.value);
          setPopular(e.target.value);
        }}
        displayEmpty
        autoWidth
        size="medium"
      >
        <MenuItem value={'popular'}>Популярный</MenuItem>
        <MenuItem value={'noname'}>Неизвестный</MenuItem>
      </Select>
    </FormControl>
  );
}
