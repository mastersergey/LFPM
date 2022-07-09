import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleLoginModal } from 'redux/action';
import { useStorage } from 'storage/storageActions';

import { FilmType } from './film-data';
import { StateType } from './film-list';

export function getPosterUrl(path: string | null) {
  return 'https://image.tmdb.org/t/p/w300/' + path;
}

export function FilmCard(props: { film: FilmType }) {
  const { vote_average, title, poster_path, id } = props.film;
  const isUserLogged = useSelector((state: StateType) => state.isUserLogged);
  const storage = useStorage();
  const dispatch = useDispatch();

  function onStarClick() {
    if (!isUserLogged) {
      dispatch(toggleLoginModal(true));
    } else {
      const currentStorage = storage.getItem('favorite') || [];
      const isDublicate = currentStorage.find((item: FilmType) => item.id === id);
      if (isDublicate) {
        const newStorage = currentStorage.filter((item: FilmType) => item.id !== id);
        storage.setItem('favorite', newStorage);
      } else {
        currentStorage.push(props.film);
        storage.setItem('favorite', currentStorage);
      }
    }
  }

  function onBookmarkClick() {
    if (!isUserLogged) {
      dispatch(toggleLoginModal(true));
    } else {
      const currentStorage = storage.getItem('bookmark') || [];
      const isDublicate = currentStorage.find((item: FilmType) => item.id === id);
      if (isDublicate) {
        const newStorage = currentStorage.filter((item: FilmType) => item.id !== id);
        storage.setItem('bookmark', newStorage);
      } else {
        currentStorage.push(props.film);
        storage.setItem('bookmark', currentStorage);
      }
    }
  }

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
            <IconButton color="default" onClick={onStarClick}>
              <StarBorderIcon />
            </IconButton>
            <IconButton color="default" onClick={onBookmarkClick}>
              <BookmarkBorderIcon />
            </IconButton>
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
