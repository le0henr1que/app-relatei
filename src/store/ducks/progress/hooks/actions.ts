import { useDispatch } from 'react-redux';

import { step, finishStep} from '..';

export const useProgress = () => {
  const dispatch = useDispatch();
  const nextStep: any = () => dispatch(step({ type: 'NEXT_STEP' }));
  const prevStep: any = () => dispatch(step({ type: 'PREV_STEP' }));
  const amountStep: any = ({amount}: {amount:number}) => dispatch(finishStep({amount}))
  return { nextStep, prevStep, amountStep };
};
