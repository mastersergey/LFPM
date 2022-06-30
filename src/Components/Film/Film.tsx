import { Box, Card, CardContent, CardMedia, Container } from '@mui/material';
import { getFilmInfo } from 'Components/FilmList/filmData';
import React from 'react';
import { useParams } from 'react-router-dom';

function getImageUrl(path: string | null) {
  return 'https://image.tmdb.org/t/p/original/' + path;
}

export function Film() {
  const params = useParams();
  const { id, title, overview, backdrop_path } = getFilmInfo(Number(params.filmId));
  return (
    <>
      <Card
        sx={{
          display: 'grid',
          gridTemplateColumns: '35% 65%',
        }}
      >
        <CardContent>
          <p>{title}</p>
          <p>{overview}</p>
        </CardContent>
        <CardMedia
          component="img"
          alt="poster"
          height="100%"
          image={getImageUrl(backdrop_path)}
        />
      </Card>
    </>
  );
}
