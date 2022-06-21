import './App.css';

import { Box } from '@mui/material';
import { Container } from '@mui/system';
import FilmCard from 'Components/FilmList/FilmCard';
import Filter from 'Components/Filter/Filter';
import Header from 'Components/Header';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ display: 'flex' }}>
        <Box
          sx={{
            width: '320px',
            height: '620px',
            padding: '20px',
            borderRadius: '7px',
            boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
          }}
        >
          <Filter />
        </Box>
        <Container
          maxWidth="xl"
          sx={{ display: 'grid', gridTemplateColumns: '470px 470px' }}
        >
          <FilmCard />
          <FilmCard />
          <FilmCard />
        </Container>
      </Container>
    </>
  );
}

export default App;
