import { DialogModalState } from './types';
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE: DialogModalState = {
  isOpen: false,
};

const dialogModal = createSlice({
  name: 'dialogModal',
  initialState: INITIAL_STATE,
  reducers: {
    open(state, action) {
      state.isOpen = action.payload.isOpen;
    },
  },
});

export const { open } = dialogModal.actions;
export default dialogModal.reducer;
