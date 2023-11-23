import React, { useEffect } from 'react';
import { Center } from '@gluestack-ui/themed';
import { Verification } from '@components';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { usePasswordVerificationMutation } from 'src/store/rtk/features/api/user.api';
import useToast from '@hooks/useToast';

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
    <Center flex={1} bg='$light100'>
      <Verification
        handleResend={handleResend}
        handleSend={handleSend}
        handleSignUP={() => router.push('/auth/register')}
        isLoading={isLoading}
      />
    </Center>
  );
}
