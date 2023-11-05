import { SimpleLogin } from '@components';
import { Center } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';

export default function index() {
  const router = useRouter();

  return (
    <Center bg='$light100' alignItems='center' flex={1}>
      <SimpleLogin
        handleLogin={() => router.replace('/(drawer)/(tab)/home/main')}
        handleSignUP={() => router.push('/(stack)/auth/register')}
        onCheck={(value) => {}}
      />
    </Center>
  );
}
