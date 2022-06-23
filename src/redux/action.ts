const SET_PAGE = 'SET_PAGE';

function setCurrentPage(page: number) {
  return { type: SET_PAGE, page };
}

export { SET_PAGE, setCurrentPage };
