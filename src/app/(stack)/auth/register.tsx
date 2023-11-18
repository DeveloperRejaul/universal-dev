import { Center } from '@gluestack-ui/themed';
import { SimpleSingUp } from '@components';
import { useRouter } from 'expo-router';

export default function register() {
  const router = useRouter();
  const handleSignUp = (values:object)=>{
    alert(JSON.stringify(values))
  }

  return (
    <Center justifyContent='center' alignItems='center' bg='$light100' flex={1}>
      <SimpleSingUp 
      handleSignUP={handleSignUp}
      handleLogin={() => router.push('/')}
      />
    </Center>
  );
}
