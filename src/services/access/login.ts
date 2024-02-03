import { api } from '../api';

export const exitEarlyApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.query<any, void>({
      query: () => ({
        url: '/login',
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginQuery } = exitEarlyApi;

export const {
  endpoints: { login },
} = exitEarlyApi;
