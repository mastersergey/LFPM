import './index.css';

import { Film } from 'Components/FilmList/film-details';
import { MainContainer } from 'main-container';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<MainContainer />}></Route>
        <Route path="film">
          <Route path=":filmId" element={<Film />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>Theres nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
