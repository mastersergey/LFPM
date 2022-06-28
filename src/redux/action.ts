const SET_PAGE = 'SET_PAGE';
const SET_SORT = 'SET_SORT';
const SET_YEAR = 'SET_YEAR';
const SET_GENRE = 'SET_GENRE';
const REMOVE_GENRE = 'REMOVE_GENRE';
const RESET_GENRE = 'RESET_GENRE';
const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL';
const SET_USER_LOG = 'SET_USER_LOG';
const TOGGLE_LOGOUT_MODAL = 'TOGGLE_LOGOUT_MODAL';
const SET_MARKER = 'SET_MARKER';

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

function toggleLoginModal(toggle: boolean) {
  return { type: TOGGLE_LOGIN_MODAL, toggle };
}

function toggleLogOutModal(toggle: boolean) {
  return { type: TOGGLE_LOGOUT_MODAL, toggle };
}

function setUserLog(isLog: boolean) {
  return { type: SET_USER_LOG, isLog };
}

function setMarkerType(marker: string) {
  return { type: SET_MARKER, marker };
}

export {
  REMOVE_GENRE,
  removeGenre,
  RESET_GENRE,
  resetGenre,
  SET_GENRE,
  SET_MARKER,
  SET_PAGE,
  SET_SORT,
  SET_USER_LOG,
  SET_YEAR,
  setCurrentPage,
  setGenre,
  setMarkerType,
  setSortType,
  setUserLog,
  setYearFilter,
  TOGGLE_LOGIN_MODAL,
  TOGGLE_LOGOUT_MODAL,
  toggleLoginModal,
  toggleLogOutModal,
};
