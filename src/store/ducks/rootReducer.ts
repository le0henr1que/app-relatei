import { combineReducers } from 'redux';

import repositories from './repositories';
import { api } from '@/services/api';

export default combineReducers({
  repositories,
  [api.reducerPath]: api.reducer,
});
