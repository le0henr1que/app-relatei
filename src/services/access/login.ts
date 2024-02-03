import { api } from '../api';

export const exitEarlyApi = api.injectEndpoints({
  endpoints: (builder: {
    query: (arg0: {
      query: (ra: any) => string;
      providesTags: string[];
    }) => any;
  }) => ({
    login: builder.query({
      query: (ra) => `/students/${ra}`,
      providesTags: ['teste'],
    }),
  }),
});

export const { useLoginQuery } = exitEarlyApi;

export const {
  endpoints: { login },
} = exitEarlyApi;
