import { Button } from '@mui/material';
import { StateType } from 'Components/FilmList/film-list';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoginModal, toggleLogOutModal } from 'redux/action';

export function LoginButton() {
  const dispatch = useDispatch();

  const isUserLogged = useSelector((state: StateType) => state.isUserLogged);
  const buttonColor = isUserLogged ? 'red' : 'green';

  function onLoginClick() {
    dispatch(toggleLoginModal(true));
  }

  function onLogoutClick() {
    dispatch(toggleLogOutModal(true));
  }

  return (
    <Button
      variant="contained"
      onClick={isUserLogged ? onLogoutClick : onLoginClick}
      sx={{
        ml: '30px',
        color: '#fff',
        backgroundColor: buttonColor,
        ':hover': {
          backgroundColor: buttonColor,
        },
      }}
    >
      {isUserLogged ? 'log out' : 'login'}
    </Button>
  );
}
