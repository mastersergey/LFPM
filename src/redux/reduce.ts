import { combineReducers } from 'redux';

import { SET_PAGE, SET_SORT, SET_YEAR } from './action';

type PageActionType = {
  type: string;
  page: number;
};

type SortActionType = {
  type: string;
  sortBy: string;
};

type YearActionType = {
  type: string;
  year: number;
};

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

const lfmpApp = combineReducers({ currentPage, sortType, yearFilter });

export default lfmpApp;
