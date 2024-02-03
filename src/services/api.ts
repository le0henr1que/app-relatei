import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseUrl = `https://github.dev/`;

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers: Headers) => {
    // const apiKey = import.meta.env.VITE_API_KEY;
    // headers.set('x-api-key', apiKey);

    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['teste'],
  endpoints: () => ({}),
});
