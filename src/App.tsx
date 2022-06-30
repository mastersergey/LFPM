import './App.css';

import Header from 'Components/Header/Header';
import { LoginModal } from 'Components/Modal/login-modal';
import { LogOutModal } from 'Components/Modal/logout-modal';
import React from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { store } from 'redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <React.StrictMode>
          <Header />
          <LoginModal />
          <LogOutModal />
          <Outlet />
        </React.StrictMode>
      </Provider>
    </>
  );
}

export default App;
