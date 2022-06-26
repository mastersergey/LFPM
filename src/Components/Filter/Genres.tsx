import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { StateType } from 'Components/FilmList/FilmList';
import React, { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeGenre, setCurrentPage, setGenre } from 'redux/action';

import genresData from './genresData';

function GenreItem(props: { id: number; name: string }) {
  const dispatch = useDispatch();
  const { name, id } = props;
  const isChecked = useSelector((state: StateType) => state.genresList.includes(id));

  function hundleChecked(event: SyntheticEvent, checked: boolean) {
    dispatch(checked ? setGenre(id) : removeGenre(id));
    dispatch(setCurrentPage(1));
  }

  return (
    <FormControlLabel
      checked={isChecked}
      onChange={hundleChecked}
      control={<Checkbox size="small" />}
      label={name}
    />
  );
}

function Genres() {
  console.log(useSelector((state) => state));

  return (
    <FormGroup
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        mb: '30px',
        maxHeight: 300,
      }}
    >
      {genresData.map(({ id, name }) => (
        <GenreItem id={id} name={name} key={id} />
      ))}
    </FormGroup>
  );
}

export default Genres;
