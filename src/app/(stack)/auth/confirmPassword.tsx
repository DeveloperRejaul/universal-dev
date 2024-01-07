import { View } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import ConfirmPassword from 'src/features/authentication/screens/confirmpassword';
import { useAddNewPasswordMutation } from 'src/features/authentication/api';

export default function () {
  const router = useRouter();
  const [addNewPassword, { isError, isSuccess, isLoading }] = useAddNewPasswordMutation();
  const { token }: { token: string } = useLocalSearchParams();

  const handleSend = async (values: { password: string }) => {
    router.push('/auth/login');
    await addNewPassword({ password: await values.password, token });
  };
  useEffect(() => {

    if (isSuccess) {
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
