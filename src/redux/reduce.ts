import { combineReducers } from 'redux';

import {
  REMOVE_GENRE,
  RESET_GENRE,
  SET_GENRE,
  SET_MARKER,
  SET_PAGE,
  SET_SORT,
  SET_USER_LOG,
  SET_YEAR,
  TOGGLE_LOGIN_MODAL,
  TOGGLE_LOGOUT_MODAL,
} from './action';

type PageActionType = {
  type: string;
  page: number;
};

type SortActionType = {
  type: string;
  sortBy: string;
};

type SetMarkerType = {
  type: string;
  marker: string;
};

type YearActionType = {
  type: string;
  year: number;
};

type GenresListType = {
  type: string;
  genreId: number;
};

type LoginModalType = {
  type: string;
  toggle: boolean;
};

type SetUserLogType = {
  type: string;
  isLog: boolean;
};

const isLogged = !!localStorage.getItem('user');

function currentPage(state = 1, action: PageActionType) {
  switch (action.type) {
    case SET_PAGE:
      return action.page;
    default:
      return state;
  }
}

function sortType(state = 'popularFirst', action: SortActionType) {
  switch (action.type) {
    case SET_SORT:
      return action.sortBy;
    default:
      return state;
  }
}

function yearFilter(state = 2020, action: YearActionType) {
  switch (action.type) {
    case SET_YEAR:
      return action.year;
    default:
      return state;
  }
}

function genresList(state: number[] = [], action: GenresListType) {
  const { type, genreId } = action;
  switch (type) {
    case SET_GENRE:
      return [...state, genreId];
    case REMOVE_GENRE:
      return [...state].filter((item) => item !== action.genreId);
    case RESET_GENRE:
      return action.genreId;
    default:
      return state;
  }
}

function loginModal(state = false, action: LoginModalType) {
  const { type, toggle } = action;
  switch (type) {
    case TOGGLE_LOGIN_MODAL:
      return toggle;
    default:
      return state;
  }
}

function logoutModal(state = false, action: LoginModalType) {
  const { type, toggle } = action;
  switch (type) {
    case TOGGLE_LOGOUT_MODAL:
      return toggle;
    default:
      return state;
  }
}

function isUserLogged(state = isLogged, action: SetUserLogType) {
  const { type, isLog } = action;

  switch (type) {
    case SET_USER_LOG:
      return isLog;
    default:
      return state;
  }
}

function markerType(state = 'None', action: SetMarkerType) {
  const { type, marker } = action;

  switch (type) {
    case SET_MARKER:
      return marker;
    default:
      return state;
  }
}

const lfmpApp = combineReducers({
  markerType,
  logoutModal,
  isUserLogged,
  currentPage,
  sortType,
  yearFilter,
  genresList,
  loginModal,
});

export default lfmpApp;
