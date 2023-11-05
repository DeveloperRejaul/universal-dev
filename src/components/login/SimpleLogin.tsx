import { rf, rh, rw } from 'src/constants/dimensions';
import { Box, HStack, Pressable, Text } from '@gluestack-ui/themed';
import { Checkbox, Input } from '@platform-components';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

type appProps = {
  handleLogin?: () => void;
  title?: string;
  setEmail?: (value: string) => void;
  emailLabel?: string;
  passwordLabel?: string;
  setPassword?: (value: string) => void;
  emailPlaceholder?: string;
  passwordPlaceholder?: string;
  onChange?: (value: boolean) => void;
  onCheck?: (value: boolean) => void;
  handleSignUP?: () => void;
};

export default function SimpleLogin({
  handleLogin,
  title,
  setEmail,
  setPassword,
  emailLabel,
  passwordLabel,
  emailPlaceholder,
  passwordPlaceholder,
  onCheck,
  handleSignUP,
}: appProps) {
  return (
    <Box
      bg='$light100'
      shadowColor='$black'
      shadowOffset={{ height: 5, width: 5 }}
      shadowOpacity={'$10'}
      shadowRadius={'$5'}
      elevation={'$5'}
      sx={{
        '@base': { width: '100%', height: '100%' },
        '@md': { width: '60%', height: '90%', borderRadius: '$md' },
        '@lg': { width: '50%', height: '80%' },
      }}
      justifyContent='center'
      alignItems='center'>
      <Box
        rowGap={rh(2)}
        w={'90%'}
        sx={{ _web: { w: '70%' }, '@lg': { _web: { w: '50%' } } }}>
        <Text fontSize={'$2xl'} color='$trueGray800' fontWeight='$semibold'>
          {title ? title : 'Login'}
        </Text>
        <Input
          label={emailLabel ? emailLabel : 'Email'}
          placeholder={emailPlaceholder ? passwordPlaceholder : 'Enter email'}
          onChangeText={setEmail}
        />
        <Input
          label={passwordLabel ? passwordLabel : 'Password'}
          placeholder={
            passwordPlaceholder ? passwordPlaceholder : 'Enter password'
          }
          onChangeText={setPassword}
        />
        <HStack
          alignItems='center'
          sx={{ _web: { columnGap: 2, marginLeft: -4 }, columnGap: rw(2) }}>
          <Checkbox background='#ed5684' size={1.3} onCheck={onCheck} />
          <Text> Remember me ? </Text>
        </HStack>
        <Pressable
          bg='#ed5684'
          justifyContent='center'
          alignItems='center'
          borderRadius={5}
          sx={{
            _web: { paddingVertical: '$1', ':hover': { bg: '#f81d5f' } },
          }}
          paddingVertical={'$2'}
          onPress={handleLogin}>
          <Text
            color='$trueGray900'
            fontWeight='$semibold'
            fontSize={rf(2.2)}
            sx={{ _web: { fontSize: rf(1.2) } }}>
            Login
          </Text>
        </Pressable>
        <Pressable>
          <Text textAlign='right'>Forgot password?</Text>
        </Pressable>

        <HStack w={'100%'} justifyContent='center' alignItems='center'>
          <Box w={'45%'} height={'$0.5'} bg='$coolGray200' />
          <Box
            w={'10%'}
            justifyContent='center'
            alignItems='center'
            h={30}
            borderColor='$coolGray200'
            borderWidth={'$2'}
            borderRadius={'$sm'}>
            <Text color='$coolGray400'>OR</Text>
          </Box>
          <Box w={'45%'} height={'$0.5'} bg='$coolGray200' />
        </HStack>

        <HStack justifyContent='center' columnGap='$7' marginTop={'$1'}>
          <Pressable
            sx={{
              height: '$8',
              width: '$8',
              borderRadius: '$full',
              borderWidth: 3,
              borderColor: '#b30d18',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name='google' size={20} color='#b30d18' />
          </Pressable>
          <Pressable
            sx={{
              height: '$8',
              width: '$8',
              borderRadius: '$full',
              borderWidth: 3,
              borderColor: '#304b7a',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome name='facebook-f' size={20} color='#304b7a' />
          </Pressable>
          <Pressable
            sx={{
              height: '$8',
              width: '$8',
              borderRadius: '$full',
              borderWidth: 3,
              borderColor: '#245493',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome name='linkedin' size={18} color='#245493' />
          </Pressable>
        </HStack>
        <HStack justifyContent='center' columnGap={'$1.5'}>
          <Text>Need an account?</Text>
          <Pressable onPress={handleSignUP}>
            <Text
              textTransform='uppercase'
              textDecorationLine='underline'
              fontWeight='$medium'>
              Sing up
            </Text>
          </Pressable>
        </HStack>
      </Box>
    </Box>
  );
}
