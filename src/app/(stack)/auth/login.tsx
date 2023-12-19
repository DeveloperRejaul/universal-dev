import { useAppDispatch } from '@hooks/useAppDispatch';
import useToast from '@hooks/useToast';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';
import { useLoginMutation } from 'src/features/authentication/api';
import SimpleLogin from 'src/features/authentication/screens/login';
import { handleLogin } from 'src/features/authentication/slice';

type loginParams = {
  email: string;
  password: string;
  isRemember: boolean;
};

export default function index() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { showToast } = useToast();
  const [login, { isLoading, isSuccess, isError }] = useLoginMutation();

  const loginReq = async (values: loginParams) => {
    await login({
      email: values.email,
      password: values.password,
      isRemember: values.isRemember,
    });
  };

  useEffect(() => {
    if (isError)
      showToast({
        message: 'Account login failed',
        title: 'Error',
        action: 'error',
      });
    if (isSuccess) {
      dispatch(handleLogin());
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
    <View className='flex-1 justify-center items-center bg-stone-100'>
      <SimpleLogin
        handleGoogleLogin={() => {}}
        handleFacebookLogin={() => {}}
        handleGithubLogin={() => {}}
        isLoading={isLoading}
        handleLogin={loginReq}
        handleSignUP={() => router.replace('/(stack)/auth/register')}
        handleForgotPassword={() => router.push('/auth/forgotPassword')}
      />
    </View>
  );
}
