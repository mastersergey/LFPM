import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { StateType } from 'Components/FilmList/film-list';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLog, toggleLogOutModal } from 'redux/action';

export function LogOutModal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: StateType) => state.logoutModal);

  function onLogOut() {
    localStorage.setItem('user', '');
    dispatch(setUserLog(false));
    dispatch(toggleLogOutModal(false));
  }

  return (
    <Dialog
      open={isModalOpen}
      onClose={() => dispatch(toggleLogOutModal(false))}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {'Вы действительно хотите выйти?'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Выход из аккаунта приведет к отключению всех возможностей авторизированного
          пользователя
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onLogOut}>Yes</Button>
        <Button onClick={() => dispatch(toggleLogOutModal(false))}>Noup</Button>
      </DialogActions>
    </Dialog>
  );
}
