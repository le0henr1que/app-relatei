import { combineReducers } from 'redux';

import progress from './progress';
import { api } from '@/services/api';

export default combineReducers({
  progress,
  [api.reducerPath]: api.reducer,
});
