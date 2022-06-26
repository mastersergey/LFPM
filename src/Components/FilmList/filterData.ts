import { useSelector } from 'react-redux';

import { filmsData, FilmType } from './filmData';
import { StateType } from './FilmList';

function sortData(data: FilmType[], filter: string): FilmType[] {
  switch (filter) {
    case 'popularFirst':
      return [...data].sort((a, b) => b.popularity - a.popularity);
    case 'popularLast':
      return [...data].sort((a, b) => a.popularity - b.popularity);
    case 'ratingFirst':
      return [...data].sort((a, b) => b.vote_average - a.vote_average);
    case 'ratingLast':
      return [...data].sort((a, b) => a.vote_average - b.vote_average);
    default:
      return data;
  }
}

function getFilteredData() {
  const sortedData = useSelector((state: StateType) =>
    sortData(filmsData, state.sortType),
  );
  const filteredByYear = useSelector((state: StateType) =>
    sortedData.filter(
      ({ release_date }) => new Date(release_date).getFullYear() === state.yearFilter,
    ),
  );

  const isGenreInState = (filmGenre: number[], stateGenres: number[]) => {
    return filmGenre.find((id) => stateGenres.includes(id));
  };

  const filteredData = useSelector((state: StateType) => {
    return filteredByYear.filter(
      ({ genre_ids }) =>
        !state.genresList.length || isGenreInState(genre_ids, state.genresList),
    );
  });

  return filteredData;
}

export { getFilteredData };
