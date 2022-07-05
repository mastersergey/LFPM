import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Box, Container } from '@mui/system';
import { Genre, genresData } from 'Components/Filter/genres/genresData';
import React, { useState } from 'react';

import { SearchResult } from './search-result';

export function SearchPage() {
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [popular, setPopular] = useState('');

  function hundleChangeGenre(event: SelectChangeEvent) {
    setGenre(event.target.value);
  }
  function hundleChangeRating(event: SelectChangeEvent) {
    setRating(event.target.value);
  }
  function hundleChangePopular(event: SelectChangeEvent) {
    setPopular(event.target.value);
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'grid',
        gridTemplateColumns: '40% 60%',
        height: '90vh',
      }}
    >
      <Box>
        <h5>
          Ответьте на вопросы ниже в соответствии с вашими предпочтениями, чтобы мы
          подобрали для вас фильм
        </h5>
        <p>Выбор жанра:</p>
        <FormControl sx={{ width: '300px', mb: '20px' }}>
          <Select
            value={genre}
            onChange={hundleChangeGenre}
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
        <p>Оценка фильма:</p>
        <FormControl sx={{ width: '300px', mb: '20px' }}>
          <Select
            value={rating}
            onChange={hundleChangeRating}
            displayEmpty
            autoWidth
            size="medium"
          >
            <MenuItem value={'high'}>Высокая</MenuItem>
            <MenuItem value={'low'}>Низкая</MenuItem>
          </Select>
        </FormControl>
        <p>Популярность фильма:</p>
        <FormControl sx={{ width: '300px', mb: '20px' }}>
          <Select
            value={popular}
            onChange={hundleChangePopular}
            displayEmpty
            autoWidth
            size="medium"
          >
            <MenuItem value={'popular'}>Популярный</MenuItem>
            <MenuItem value={'noname'}>Неизвестный</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <SearchResult genre={genre} rating={rating} popular={popular} />
    </Container>
  );
}
