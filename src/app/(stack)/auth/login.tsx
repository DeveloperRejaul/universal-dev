import { SimpleLogin } from '@components';
import { Center } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';

export default function index() {
  const router = useRouter();

  return (
    <Center bg='$blueGray500' alignItems='center' flex={1}>
      <SimpleLogin
        handleLogin={() => router.replace('/(tab)/(one)/one')}
        handleSignUP={() => router.push('/(stack)/auth/register')}
        onCheck={(value) => {}}
      />
    </Center>
  );
}
