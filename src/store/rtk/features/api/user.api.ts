import { api } from './api';

type loginData = {
  email: string;
  password: string;
};

type forgetPassData = {
  email: string;
};

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
    login: builder.mutation({
      query: (data: loginData) => {
        return {
          url: '/auth/user/login',
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        };
      },
    }),
    forgetPassword: builder.mutation({
      query: (data: forgetPassData) => {
        return {
          url: '/auth/user/forgot-password',
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        };
      },
    }),
    passwordVerification: builder.mutation({
      query: (data: forgetPassData) => {
        return {
          url: '/auth/user/forgot-password',
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        };
      },
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useForgetPasswordMutation,
  usePasswordVerificationMutation,
} = userApi;
