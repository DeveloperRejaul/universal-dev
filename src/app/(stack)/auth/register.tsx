import { Center } from '@gluestack-ui/themed';
import { SimpleSingUp } from '@components';
import { useRouter } from 'expo-router';

export default function register() {
  const router = useRouter();

  return (
    <Center justifyContent='center' alignItems='center' bg='$light100' flex={1}>
      <SimpleSingUp handleLogin={() => router.push('/')} />
    </Center>
  );
}
