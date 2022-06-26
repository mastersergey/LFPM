const SET_PAGE = 'SET_PAGE';
const SET_SORT = 'SET_SORT';
const SET_YEAR = 'SET_YEAR';
const SET_GENRE = 'SET_GENRE';
const REMOVE_GENRE = 'REMOVE_GENRE';
const RESET_GENRE = 'RESET_GENRE';

function setCurrentPage(page: number) {
  return { type: SET_PAGE, page };
}

function setSortType(sortBy: string) {
  return { type: SET_SORT, sortBy };
}

function setYearFilter(year: number) {
  return { type: SET_YEAR, year };
}

function setGenre(genreId: number) {
  return { type: SET_GENRE, genreId };
}

function removeGenre(genreId: number) {
  return { type: REMOVE_GENRE, genreId };
}

function resetGenre() {
  return { type: RESET_GENRE, genreId: [] };
}

export {
  REMOVE_GENRE,
  removeGenre,
  RESET_GENRE,
  resetGenre,
  SET_GENRE,
  SET_PAGE,
  SET_SORT,
  SET_YEAR,
  setCurrentPage,
  setGenre,
  setSortType,
  setYearFilter,
};
