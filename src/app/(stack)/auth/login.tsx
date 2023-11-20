import { SimpleLogin } from '@components';
import { Center } from '@gluestack-ui/themed';
import useToast from '@hooks/useToast';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { useLoginMutation } from 'src/store/rtk/features/api/user.api';

type loginParams = {
  email: string;
  password: string;
};

export default function index() {
  const router = useRouter();
  const { showToast } = useToast();
  const [login, { isLoading, isSuccess, isError }] = useLoginMutation();
  const handleLogin = async (values: loginParams) => {
    await login({ email: values.email, password: values.password });
  };
  useEffect(() => {
    if (isError)
      showToast({
        message: 'Account login failed',
        title: 'Error',
        action: 'error',
      });
    if (isSuccess) {
      showToast({
        message: 'Account login success',
        title: 'Success',
        action: 'success',
      });

      setTimeout(() => {
        router.replace('/(drawer)/(tab)/home/main');
      }, 1000);
    }
  }, [isError, isSuccess]);

  return (
    <Center bg='$light100' alignItems='center' flex={1}>
      <SimpleLogin
        isLoading={isLoading}
        handleLogin={handleLogin}
        handleSignUP={() => router.push('/(stack)/auth/register')}
        handleForgotPassword={() => router.push('/auth/forgotPassword')}
      />
    </Center>
  );
}
