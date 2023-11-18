import { SimpleLogin } from '@components';
import { Center } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';

export default function index() {
  const router = useRouter();
  const handleLogin = (values:object)=>{
    alert(JSON.stringify(values))
    router.replace('/(drawer)/(tab)/home/main')
  }

  return (
    <Center bg='$light100' alignItems='center' flex={1}>
      <SimpleLogin
        handleLogin={handleLogin}
        handleSignUP={() => router.push('/(stack)/auth/register')}
        handleForgotPassword={() => router.push('/auth/forgotPassword')}
      />
    </Center>
  );
}
