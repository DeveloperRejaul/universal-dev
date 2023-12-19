import { View } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import useToast from '@hooks/useToast';
import ConfirmPassword from 'src/features/authentication/screens/confirmpassword';
import { useAddNewPasswordMutation } from 'src/features/authentication/api';

export default function () {
  const router = useRouter();
  const { showToast } = useToast();
  const [addNewPassword, { isError, isSuccess, error, isLoading }] =
    useAddNewPasswordMutation();
  const { token }: { token: string } = useLocalSearchParams();
  const handleSend = async (values: { password: string }) => {
    // router.push('/auth/login')
    await addNewPassword({ password: values.password, token });
  };
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
        router.push('/auth/login');
      }, 1000);
    }
  }, [isError, isSuccess]);

  return (
    <View className='flex-1 justify-center items-center bg-stone-100'>
      <ConfirmPassword handleSend={handleSend} isLoading={isLoading} />
    </View>
  );
}
