import { api } from './api';

export const userApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => {
        return {
          url: '/auth/user',
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        };
      },
    }),
  }),
});

export const { useSignupMutation } = userApi;
