import { useDispatch } from 'react-redux';

import { handleData } from '..';

export const useRepositories = () => {
  const dispatch = useDispatch();
  const setData: any = (data: string[]) => dispatch(handleData(data));
  return { setData };
};
