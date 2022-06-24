import { useSelector } from 'react-redux';

import { filmsData, FilmType } from './filmData';
import { StateType } from './FilmList';

function filterData(data: FilmType[], filter: string): FilmType[] {
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
  const filteredData = useSelector((state: StateType) =>
    filterData(filmsData, state.sortType).filter(
      (item) => new Date(item.release_date).getFullYear() === state.yearFilter,
    ),
  );

  return filteredData;
}

export { getFilteredData };
