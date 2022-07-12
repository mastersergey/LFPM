import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { FilmType } from '../film-data';
import BookmarkButton from './bookmark-button';
import FavoriteButton from './favorite-button';

export function getPosterUrl(path: string | null) {
  return 'https://image.tmdb.org/t/p/w300/' + path;
}

export function FilmCard(props: { film: FilmType }) {
  const { vote_average, title, poster_path, id } = props.film;

  return (
    <Box sx={{ maxWidth: '450px', mb: '30px' }}>
      <Card
        sx={{
          display: 'grid',
          gridTemplateColumns: '200px 250px',
          boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
        }}
      >
        <CardMedia
          component="img"
          alt="poster"
          height="312"
          image={getPosterUrl(poster_path)}
        />
        <CardContent sx={{ display: 'grid', gridTemplateRows: '50px 100px 100px' }}>
          <CardActions sx={{ display: 'grid', gridTemplateColumns: '120px 30px 30px' }}>
            <Typography variant="subtitle1">Рейтинг: {vote_average}</Typography>
            <FavoriteButton film={props.film} />
            <BookmarkButton film={props.film} />
          </CardActions>
          <Typography variant="h6">{title}</Typography>
          <Divider sx={{ mb: '20px' }} />
          <Link
            to={`/film/${id}`}
            key={id}
            style={{ color: 'black', textDecoration: 'none' }}
          >
            Подробнее
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
}

export default FilmCard;
