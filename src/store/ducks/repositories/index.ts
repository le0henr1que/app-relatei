import { RepositoriesState } from './types';
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE: RepositoriesState = {
  data: [{ id: 1, name: 'teste' }],
};

const repositories = createSlice({
  name: 'repositories',
  initialState: INITIAL_STATE,
  reducers: {
    handleData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { handleData } = repositories.actions;
export default repositories.reducer;
