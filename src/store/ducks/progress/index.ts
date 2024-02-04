import { ProgressState } from './types';
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE: ProgressState = {
  currentStep: 0,
};

const progress = createSlice({
  name: 'progress',
  initialState: INITIAL_STATE,
  reducers: {
    step(state, action) {
      state.currentStep =
        action.payload.type === 'NEXT_STEP'
          ? state.currentStep + 1
          : state.currentStep - 1;
    },
  },
});

export const { step } = progress.actions;
export default progress.reducer;
