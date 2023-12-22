import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import SimpleSignUp from 'src/features/authentication/screens/signup';
import { useSignupMutation } from 'src/features/authentication/api';
import { View } from 'react-native';

type signUpParams = {
  name: string;
  password: string;
  email: string;
};

export default function register() {
  const router = useRouter();
  const [singUp, { isLoading, isError, isSuccess, data }] = useSignupMutation();

  const handleSignUp = async (values: signUpParams) => {
    await singUp({
      name: values.name,
      password: values.password,
      email: values.email,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        router.push('/');
      }, 1000);
    }
  }, [isError, isSuccess]);

  return (
    <View className='flex-1 justify-center items-center bg-stone-100'>
      <SimpleSignUp
        handleSignUP={handleSignUp}
        handleLogin={() => router.push('/')}
        isLoading={isLoading}
      />
    </View>
  );
}
