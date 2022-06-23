import { createStore } from 'redux';

import { currentPage } from './reduce';

export const store = createStore(currentPage);
