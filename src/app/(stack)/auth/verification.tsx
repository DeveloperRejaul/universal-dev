import React, { useEffect } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Verification from 'src/features/authentication/screens/verification';
import { usePasswordVerificationMutation } from 'src/features/authentication/api';
import { View } from 'react-native';
import { codeType, paramsType } from 'src/features/authentication/type';


export default function verification() {
  const router = useRouter();
  const params: paramsType = useLocalSearchParams();
  const [checkPasswordValid, response] = usePasswordVerificationMutation();
  const { isError, isSuccess, isLoading } = response;

  const handleSend = async (values: codeType) => {
    const {otp1,otp2,otp3,otp4} = await values;

    router.push('/auth/confirmPassword');
    await checkPasswordValid({
      code: Number(`${otp1}${otp2}${otp3}${otp4}`),
      token: params.token,
    });
  };

  const handleResend = () => {};

  useEffect(() => {
    if (isSuccess) {
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
