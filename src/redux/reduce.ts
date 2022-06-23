import { SET_PAGE } from './action';

type pageActionType = {
  type: string;
  page: number;
};

export function currentPage(state = 1, action: pageActionType) {
  switch (action.type) {
    case SET_PAGE:
      return (state = action.page);
    default:
      return state;
  }
}
