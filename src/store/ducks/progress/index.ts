import { ProgressState } from './types';
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialStep = Cookies.get('currentStep')
  ? parseInt(Cookies.get('currentStep') as string)
  : 0;

const INITIAL_STATE: ProgressState = {
  currentStep: initialStep,
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

      Cookies.set('currentStep', state.currentStep.toString());
    },
  },
});

export const { step } = progress.actions;
export default progress.reducer;
