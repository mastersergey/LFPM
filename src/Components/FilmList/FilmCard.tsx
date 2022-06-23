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
  Link,
  Typography,
} from '@mui/material';
import React from 'react';

function getPosterUrl(path: string) {
  return 'https://image.tmdb.org/t/p/w300/' + path;
}

function FilmCard(props: { vote: number; title: string; poster: string }) {
  const { vote, title, poster } = props;
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
          image={getPosterUrl(poster)}
        />
        <CardContent sx={{ display: 'grid', gridTemplateRows: '50px 100px 100px' }}>
          <CardActions sx={{ display: 'grid', gridTemplateColumns: '120px 30px 30px' }}>
            <Typography variant="subtitle1">Рейтинг: {vote}</Typography>
            <IconButton color="default">
              <StarBorderIcon />
            </IconButton>
            <IconButton color="default">
              <BookmarkBorderIcon />
            </IconButton>
          </CardActions>
          <Typography variant="h6">{title}</Typography>
          <Divider sx={{ mb: '20px' }} />
          <Link href="/" underline="hover">
            Подробнее
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
}

export default FilmCard;
