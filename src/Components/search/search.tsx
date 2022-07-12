import { Box, Container } from '@mui/system';
import React, { useState } from 'react';

import { GenreSelect } from './genre-select';
import { PopularSelect } from './popular-select';
import { RatingSelect } from './rating-select';
import { SearchResult } from './search-result';

export function SearchPage() {
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [popular, setPopular] = useState('');

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
        <GenreSelect onSubmit={(value: string) => setGenre(value)} />
        <p>Оценка фильма:</p>
        <RatingSelect onSubmit={(value: string) => setRating(value)} />
        <p>Популярность фильма:</p>
        <PopularSelect onSubmit={(value: string) => setPopular(value)} />
      </Box>
      <SearchResult genre={genre} rating={rating} popular={popular} />
    </Container>
  );
}
