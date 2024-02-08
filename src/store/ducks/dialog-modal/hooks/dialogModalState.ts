import { ApplicationState } from '@/store';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export const useDialogModalState = () => {
  const selectDialogModal = (state: ApplicationState) => state.dialogModal;

  const dialogModalState = useSelector(selectDialogModal);

  return useMemo(() => dialogModalState, [dialogModalState]);
};
