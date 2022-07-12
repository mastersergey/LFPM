import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoginModal } from 'redux/action';
import { useStorage } from 'storage/storageActions';

import { FilmType } from '../film-data';
import { StateType } from '../film-list';

const buttonVariant = 'bookmark';

function BookmarkButton(props: { film: FilmType }) {
  const { id } = props.film;
  const storage = useStorage();
  const isMarked = (id: number, type: string) =>
    !!storage.getItem(type).find((item: FilmType) => item.id === id);
  const [bookmark, setBookmark] = useState(isMarked(id, buttonVariant));
  const isUserLogged = useSelector((state: StateType) => state.isUserLogged);
  const dispatch = useDispatch();

  function onBookmarkClick() {
    if (!isUserLogged) {
      dispatch(toggleLoginModal(true));
    } else {
      const currentStorage = storage.getItem(buttonVariant) || [];
      const isDublicate = currentStorage.find((item: FilmType) => item.id === id);
      if (isDublicate) {
        setBookmark(false);
        const newStorage = currentStorage.filter((item: FilmType) => item.id !== id);
        storage.setItem(buttonVariant, newStorage);
      } else {
        setBookmark(true);
        currentStorage.push(props.film);
        storage.setItem(buttonVariant, currentStorage);
      }
    }
  }

  return (
    <IconButton color="default" onClick={onBookmarkClick}>
      {bookmark ? <BookmarkIcon /> : <BookmarkBorderIcon />}
    </IconButton>
  );
}

export default BookmarkButton;
