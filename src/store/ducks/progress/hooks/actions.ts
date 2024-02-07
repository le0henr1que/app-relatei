import { useDispatch } from 'react-redux';

import { step } from '..';

export const useProgress = () => {
  const dispatch = useDispatch();
  const nextStep: any = () => dispatch(step({ type: 'NEXT_STEP' }));
  const prevStep: any = () => dispatch(step({ type: 'PREV_STEP' }));
  return { nextStep, prevStep };
};
