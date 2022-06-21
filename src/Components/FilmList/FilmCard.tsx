import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Link,
  Typography,
} from '@mui/material';
import React from 'react';

function FilmCard() {
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
          alt="green iguana"
          height="300"
          image="https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg"
        />
        <CardContent>
          <CardActions sx={{ display: 'grid', gridTemplateColumns: '100px 30px 30px' }}>
            <Typography variant="subtitle1">Рейтинг: 8.5</Typography>
            <Button>
              <StarBorderIcon />
            </Button>
            <Button>
              <BookmarkBorderIcon />
            </Button>
          </CardActions>
          <Typography variant="h6">Spider-Man: Into The Spider-Verse</Typography>
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
