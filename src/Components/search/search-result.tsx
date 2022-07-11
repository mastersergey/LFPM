import { Button } from '@mui/material';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { getPosterUrl } from 'components/film-list/film-card';
import { filmsData, FilmType } from 'components/film-list/film-data';
import { getGenresString } from 'components/film-list/film-details';
import React, { useState } from 'react';

function getRecommendFilms(genre: string, rating: string, popular: string) {
  return filmsData
    .filter((film: FilmType) => film.genre_ids.includes(Number(genre)))
    .filter((film: FilmType) =>
      rating === 'high' ? film.vote_average > 5 : film.vote_average < 5,
    )
    .filter((film: FilmType) =>
      popular === 'popular'
        ? film.popularity > 100 && film.vote_count > 200
        : film.popularity < 100 && film.vote_count < 200,
    );
}

export function SearchResult(props: { genre: string; rating: string; popular: string }) {
  const { genre, rating, popular } = props;
  const [filmCount, setFilmCount] = useState(0);

  const filteredFilms = getRecommendFilms(genre, rating, popular);
  const isAnswersExist = genre !== '' && rating !== '' && popular !== '';

  if (isAnswersExist && filteredFilms[filmCount] !== undefined) {
    return (
      <Box>
        <Card
          sx={{
            mt: '10px',
            maxHeight: '500px',
            display: 'grid',
            gridTemplateColumns: '40% 60%',
            boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
          }}
        >
          <CardMedia
            component="img"
            alt="poster"
            height="520"
            image={getPosterUrl(filteredFilms[filmCount].poster_path)}
          />
          <CardContent>
            <Typography sx={{ mb: '20px', fontWeight: '700' }} variant="h3">
              {filteredFilms[filmCount].title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ mb: '20px', color: 'gray', fontWeight: '400' }}
            >
              {getGenresString(filteredFilms[filmCount].genre_ids)}
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: '20px', fontWeight: '300' }}>
              {filteredFilms[filmCount].overview}
            </Typography>
          </CardContent>
        </Card>
        <Button href={`/film/${filteredFilms[filmCount].id}`}>Подходит</Button>
        <Button onClick={() => setFilmCount(filmCount + 1)}>Не подходит</Button>
      </Box>
    );
  } else {
    return (
      <div>
        {filmCount > 0 ? (
          <p>Вы можете посмотреть список еще раз или попробовать изменить фильтры</p>
        ) : (
          <p>Ничего не найдено</p>
        )}
        {filmCount > 0 && (
          <Button onClick={() => setFilmCount(0)}>Попробовать еще</Button>
        )}
      </div>
    );
  }
}
