import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Center } from '@gluestack-ui/themed';
import { ConfirmPassword } from '@components';
import { useLocalSearchParams, useRouter } from 'expo-router';
import useToast from '@hooks/useToast';
import { useAddNewPasswordMutation } from 'src/store/rtk/features/api/user.api';

export default function () {
  const router = useRouter();
  const { showToast } = useToast();
  const [addNewPassword, { isError, isSuccess, error, isLoading }] =
    useAddNewPasswordMutation();
  const { token }: { token: string } = useLocalSearchParams();
  const handleSend = async (values: { password: string }) => {
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
    <Center flex={1} bg='$light100'>
      <ConfirmPassword handleSend={handleSend} isLoading={isLoading} />
    </Center>
  );
}
