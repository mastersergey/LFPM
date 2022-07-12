/* eslint-disable no-unused-vars */
import { FormControl, MenuItem, Select } from '@mui/material';
import genresData, { Genre } from 'components/filter/genres/genresData';
import React, { useState } from 'react';

type GenreSelectType = {
  onSubmit: (value: string) => void;
};

export function GenreSelect(props: GenreSelectType) {
  const [genre, setGenre] = useState('');
  const { onSubmit } = props;

  return (
    <FormControl sx={{ width: '300px', mb: '20px' }}>
      <Select
        value={genre}
        onChange={(e) => {
          setGenre(e.target.value);
          onSubmit(e.target.value);
        }}
        displayEmpty
        autoWidth
        size="medium"
      >
        {genresData.map((genre: Genre) => (
          <MenuItem key={genre.id} value={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
