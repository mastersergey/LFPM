import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoginModal } from 'redux/action';
import { useStorage } from 'storage/storageActions';

import { FilmType } from '../film-data';
import { StateType } from '../film-list';

const buttonVariant = 'favorite';

function FavoriteButton(props: { film: FilmType }) {
  const { id } = props.film;
  const storage = useStorage();

  const isMarked = (id: number, type: string) =>
    !!storage.getItem(type).find((item: FilmType) => item.id === id);

  const [favorite, setFavorite] = useState(isMarked(id, buttonVariant));
  const isUserLogged = useSelector((state: StateType) => state.isUserLogged);
  const dispatch = useDispatch();

  function onStarClick() {
    if (!isUserLogged) {
      dispatch(toggleLoginModal(true));
    } else {
      const currentStorage = storage.getItem(buttonVariant) || [];
      const isDublicate = currentStorage.find((item: FilmType) => item.id === id);
      if (isDublicate) {
        setFavorite(false);
        const newStorage = currentStorage.filter((item: FilmType) => item.id !== id);
        storage.setItem(buttonVariant, newStorage);
      } else {
        setFavorite(true);
        currentStorage.push(props.film);
        storage.setItem(buttonVariant, currentStorage);
      }
    }
  }

  return (
    <IconButton color="default" onClick={onStarClick}>
      {favorite ? <StarIcon /> : <StarBorderIcon />}
    </IconButton>
  );
}

export default FavoriteButton;
