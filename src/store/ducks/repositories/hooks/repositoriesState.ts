import { ApplicationState } from '@/store';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export const useRepositoriesState = () => {
  const selectRepositories = (state: ApplicationState) => state.repositories;

  const repositoriesState = useSelector(selectRepositories);

  return useMemo(() => repositoriesState, [repositoriesState]);
};
