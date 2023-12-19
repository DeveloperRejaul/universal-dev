import React, { useEffect } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import useToast from '@hooks/useToast';
import Verification from 'src/features/authentication/screens/verification';
import { usePasswordVerificationMutation } from 'src/features/authentication/api';
import { View } from 'react-native';

type codeType = {
  otp1: number;
  otp2: number;
  otp3: number;
  otp4: number;
};
type paramsType = {
  token: string;
};

export default function verification() {
  const router = useRouter();
  const { showToast } = useToast();
  const params: paramsType = useLocalSearchParams();
  const [checkPasswordValid, response] = usePasswordVerificationMutation();
  const { isError, isSuccess, error, isLoading } = response;

  const handleSend = async (values: codeType) => {
    // router.push('/auth/confirmPassword');
    await checkPasswordValid({
      code: Number(`${values.otp1}${values.otp2}${values.otp3}${values.otp4}`),
      token: params.token,
    });
  };

  const handleResend = () => {};

  useEffect(() => {
    if (isError)
      showToast({
        message: error.data,
        title: 'Error',
        action: 'error',
      });
    if (isSuccess) {
      showToast({
        message: 'Success',
        title: 'Success',
        action: 'success',
      });

      setTimeout(() => {
        router.push({
          pathname: '/auth/confirmPassword',
          params: { token: params.token },
        });
      }, 1000);
    }
  }, [isError, isSuccess]);

  return (
    <View className ='flex-1 justify-center items-center bg-stone-100'>
      <Verification
        handleResend={handleResend}
        handleSend={handleSend}
        handleSignUP={() => router.push('/auth/register')}
        isLoading={isLoading}
      />
    </View>
  );
}
