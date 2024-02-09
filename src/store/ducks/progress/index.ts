import { ProgressState } from './types';
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialStep = Cookies.get('currentStep')
  ? parseInt(Cookies.get('currentStep') as string)
  : 0;

const INITIAL_STATE: ProgressState = {
  currentStep: initialStep,
  finishStep:0
};

const progress = createSlice({
  name: 'progress',
  initialState: INITIAL_STATE,
  reducers: {
    step(state, action) {

      if(action.payload.type === 'NEXT_STEP'){
       state.currentStep = state.currentStep + 1
      }

      if(action.payload.type === 'PREV_STEP' &&  state.currentStep === 0) return 

      if(action.payload.type === 'PREV_STEP' ){
        state.currentStep = state.currentStep - 1
      }
  

      Cookies.set('currentStep', state.currentStep.toString());
    },
    finishStep(state, action){
      state.finishStep = action.payload.amount
    }
  },
});

export const { step, finishStep } = progress.actions;
export default progress.reducer;
