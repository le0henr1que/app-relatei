import { useDispatch } from 'react-redux';

import { open } from '..';

export const useDialogModal = () => {
  const dispatch = useDispatch();
  const handleModal: any = ({ isOpen }: { isOpen: boolean }) => {
    dispatch(open({ isOpen }));
  };
  return { handleModal };
};
