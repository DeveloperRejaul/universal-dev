import { Center } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import useToast from '@hooks/useToast';
import SimpleSignUp from 'src/features/authentication/screens/signup';
import { useSignupMutation } from 'src/features/authentication/api';

type signUpParams = {
  name: string;
  password: string;
  email: string;
};

export default function register() {
  const router = useRouter();
  const [singUp, { isLoading, isError, isSuccess, data }] = useSignupMutation();
  const { showToast } = useToast();

  const handleSignUp = async (values: signUpParams) => {
    await singUp({
      name: values.name,
      password: values.password,
      email: values.email,
    });
  };

  useEffect(() => {
    if (isError)
      showToast({
        message: 'Account create failed',
        title: 'Error',
        action: 'error',
      });
    if (isSuccess) {
      showToast({
        message: 'Account create success',
        title: 'Success',
        action: 'success',
      });

      setTimeout(() => {
        router.push('/');
      }, 1000);
    }
  }, [isError, isSuccess]);

  return (
    <Center justifyContent='center' alignItems='center' bg='$light100' flex={1}>
      <SimpleSignUp
        handleSignUP={handleSignUp}
        handleLogin={() => router.push('/')}
        isLoading={isLoading}
      />
    </Center>
  );
}
