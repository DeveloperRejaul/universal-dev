import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

export const api = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: isWeb
      ? process.env.EXPO_PUBLIC_BASE_URL_WEB
      : process.env.EXPO_PUBLIC_BASE_URL_MOBILE,
    credentials: 'include',
  }),
  endpoints: () => ({}),
});
