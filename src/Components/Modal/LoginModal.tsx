import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { StateType } from 'Components/FilmList/FilmList';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLog, toggleLoginModal } from 'redux/action';

export function LoginModal() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const isModalOpen = useSelector((state: StateType) => state.loginModal);
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(toggleLoginModal(false));
  }

  function savePassword(event: { target: { value: React.SetStateAction<string> } }) {
    setPassword(event.target.value);
  }

  function saveLogin(event: { target: { value: React.SetStateAction<string> } }) {
    setLogin(event.target.value);
  }

  function hundleSubmit() {
    if (login === 'shoom1337' && password === '123') {
      dispatch(setUserLog(true));
      dispatch(toggleLoginModal(false));
      localStorage.setItem('user', 'logged');
    } else {
      setIsError(true);
    }
  }

  return (
    <Dialog open={isModalOpen} maxWidth="xs" onClose={closeModal}>
      <DialogTitle>Authorization</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: '15px' }}>
          Для того чтобы использовать дополнительные возможности сайта, пожалуйста,
          войдите в аккаунт.
        </DialogContentText>
        <TextField
          error={isError}
          onChange={saveLogin}
          id="name"
          label="Логин"
          type="email"
          helperText={isError ? 'Неверный логин или пароль' : null}
          fullWidth
          variant="outlined"
          sx={{ mb: '15px' }}
        />
        <TextField
          error={isError}
          onChange={savePassword}
          id="name"
          label="Пароль"
          type="password"
          fullWidth
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Cancel</Button>
        <Button onClick={hundleSubmit}>Login</Button>
      </DialogActions>
    </Dialog>
  );
}
