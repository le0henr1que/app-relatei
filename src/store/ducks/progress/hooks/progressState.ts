import { ApplicationState } from '@/store';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export const useProgressState = () => {
  const selectProgress = (state: ApplicationState) => state.progress;

  const progressState = useSelector(selectProgress);

  return useMemo(() => progressState, [progressState]);
};
