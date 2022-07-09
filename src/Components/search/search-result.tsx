import { Box, Button } from '@mui/material';
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
        <div style={{ display: 'grid', gridTemplateColumns: '40% 60%' }}>
          <div>
            <img src={getPosterUrl(filteredFilms[filmCount].poster_path)} alt="" />
          </div>
          <div>
            <p>{filteredFilms[filmCount].title}</p>
            <p>{getGenresString(filteredFilms[filmCount].genre_ids)}</p>
            <p>{filteredFilms[filmCount].overview}</p>
          </div>
        </div>
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
