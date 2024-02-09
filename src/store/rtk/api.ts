import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'process.env.EXPO_PUBLIC_BASE_URL',
    credentials: 'include',
  }),
  endpoints: () => ({}),
});
