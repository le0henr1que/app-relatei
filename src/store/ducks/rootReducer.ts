import { combineReducers } from 'redux';

import progress from './progress';
import { api } from '@/services/api';
import dialogModal from './dialog-modal';

export default combineReducers({
  progress,
  dialogModal,
  [api.reducerPath]: api.reducer,
});
