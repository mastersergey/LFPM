import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import FilmCard from 'Components/FilmList/film-card';
import { filmsData, FilmType, getFilmInfo } from 'Components/FilmList/film-data';
import { isGenreInState } from 'Components/FilmList/filter-films';
import genresData, { Genre } from 'Components/Filter/genres/genresData';
import React from 'react';
import { useParams } from 'react-router-dom';

function getImageUrl(path: string | null) {
  return 'https://image.tmdb.org/t/p/original/' + path;
}

function getVoteStyle(vote: number) {
  return {
    color: vote > 6.9 ? 'green' : 'red',
    fontWeight: '700',
    fontSize: '20px',
  };
}
function getGenresString(genres: number[]) {
  const result: string[] = [];
  genresData.forEach((element: Genre) => {
    if (genres.includes(element.id)) result.push(element.name);
  });
  return result.join(', ');
}

function getRecommendFilms(genres: number[], id: number) {
  return filmsData
    .filter((item: FilmType) => isGenreInState(item.genre_ids, genres) && item.id !== id)
    .slice(0, 10);
}

export function Film() {
  const params = useParams();
  const {
    title,
    overview,
    backdrop_path,
    original_language,
    popularity,
    release_date,
    vote_average,
    genre_ids,
    id,
  } = getFilmInfo(Number(params.filmId));
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: 'grid',
          gridTemplateColumns: '32% 68%',
          backgroundImage: `url(${getImageUrl(backdrop_path)})`,
          backgroundSize: '68% 100%',
          backgroundPosition: 'right',
          boxShadow: '600px 2px 80px -4px rgba(0, 0, 0, 1) inset',
          height: '87vh',
        }}
      >
        <Box sx={{ mt: '50px' }}>
          <Typography sx={{ color: 'white', fontWeight: '700' }} variant="h3">
            {title}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'gray', fontWeight: '400' }}>
            <span style={getVoteStyle(vote_average)}>{vote_average} </span>
            <span style={{ marginRight: '10px' }}>{popularity}</span>
            <span>{new Date(release_date).getFullYear()}, </span>
            <span>{original_language.toUpperCase()}, RU </span>
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'gray', fontWeight: '400' }}>
            {getGenresString(genre_ids)}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: '300' }}>
            {overview}
          </Typography>
        </Box>
        <div></div>
      </Container>
      <Typography variant="h3" sx={{ margin: '10px 20px 20px 20px' }}>
        Фильмы похожего жанра:
      </Typography>
      <Container
        maxWidth="xl"
        sx={{
          display: 'grid',
          gridTemplateColumns: '33% 33% 33%',
        }}
      >
        {getRecommendFilms(genre_ids, id).map((item: FilmType) => (
          <FilmCard film={item} key={item.id} />
        ))}
      </Container>
    </>
  );
}
