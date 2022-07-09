import './App.css';

import Header from 'components/header/header';
import { LoginModal } from 'components/modal/login-modal';
import { LogOutModal } from 'components/modal/logout-modal';
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
