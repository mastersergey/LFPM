import './App.css';

import { Container } from '@mui/system';
import FilmList from 'Components/FilmList/FilmList';
import Filter from 'Components/Filter/Filter';
import Header from 'Components/Header/Header';
import { LoginModal } from 'Components/Modal/LoginModal';
import { LogOutModal } from 'Components/Modal/LogOutModal';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ display: 'flex' }}>
        <Filter />
        <FilmList />
        <LoginModal />
        <LogOutModal />
      </Container>
    </>
  );
}

export default App;
