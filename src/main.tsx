import { Film } from 'components/film-list/film-details';
import { SearchPage } from 'components/search/search';
import { MainContainer } from 'main-container';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <BrowserRouter basename="LFMP">
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<MainContainer />}></Route>
        <Route path="film">
          <Route path=":filmId" element={<Film />} />
        </Route>
        <Route path="/search" element={<SearchPage />}></Route>
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
