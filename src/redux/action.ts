const SET_PAGE = 'SET_PAGE';
const SET_SORT = 'SET_SORT';
const SET_YEAR = 'SET_YEAR';

function setCurrentPage(page: number) {
  return { type: SET_PAGE, page };
}

function setSortType(sortBy: string) {
  return { type: SET_SORT, sortBy };
}

function setYearFilter(year: number) {
  return { type: SET_YEAR, year };
}

export { SET_PAGE, SET_SORT, SET_YEAR, setCurrentPage, setSortType, setYearFilter };
