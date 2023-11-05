import { api } from './api';

export const userApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getUser: builder.query({
        query: (id) => `user/${id}`,
      }),
  }),
});

export const { useGetUserQuery } = userApi;