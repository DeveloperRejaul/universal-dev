import { api } from 'src/store/rtk/api';
import { type addNewPassword, forgetPassData, loginData, verificationPassword } from './type';

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
          url: '/user/login/',
          method: 'POST',
          body: data,
          headers: { 'Content-Type': 'application/json' },
        };
      },
    }),
    forgetPassword: builder.mutation({
      query: (data: forgetPassData) => {
        return {
          url: '/user/forgot-password',
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        };
      },
    }),
    passwordVerification: builder.mutation({
      query: (data: verificationPassword) => {
        return {
          url: '/auth/user/code-check',
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        };
      },
    }),
    addNewPassword: builder.mutation({
      query: (data: addNewPassword) => {
        return {
          url: '/auth/user/new-password',
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        };
      },
    }),
    checkAuth:builder.mutation({
      query:(token: string)=>{
        return {
          url:'user/check',
          method:'POST',
          body:{token: `Barer ${token}`}
        };
      }
    })
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useForgetPasswordMutation,
  usePasswordVerificationMutation,
  useAddNewPasswordMutation,
  useCheckAuthMutation,
} = userApi;
