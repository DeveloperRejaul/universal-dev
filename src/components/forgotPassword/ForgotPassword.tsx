import { rf, rh } from 'src/constants/dimensions';
import { Box, HStack, Pressable, Text } from '@gluestack-ui/themed';
import { Input } from '@platform-components';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

type appProps = {
  emailPlaceholder?: string;
  setEmail?: (value: string) => void;
  handleLogin?: () => void;
  handleSignUP?: () => void;
  handleSend?: () => void;
};

export default function ForgotPassword({
  setEmail,
  emailPlaceholder,
  handleLogin,
  handleSignUP,
  handleSend,
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
        <Text
          fontWeight='$semibold'
          color='$coolGray800'
          fontSize={'$lg'}
          textAlign='center'>
          Enter Email Address
        </Text>
        <Input
          placeholder={emailPlaceholder ? emailPlaceholder : 'Enter email'}
          onChangeText={setEmail}
        />
        <Pressable onPress={handleLogin}>
          <Text
            fontSize={'$sm'}
            fontWeight='$normal'
            color='$coolGray500'
            textAlign='center'>
            Back to login
          </Text>
        </Pressable>
        <Pressable
          bg='#ed5684'
          justifyContent='center'
          alignItems='center'
          borderRadius={5}
          sx={{
            _web: { paddingVertical: '$1', ':hover': { bg: '#f81d5f' } },
          }}
          paddingVertical={'$2'}
          onPress={handleSend}>
          <Text
            color='$trueGray900'
            fontWeight='$semibold'
            fontSize={rf(2.2)}
            sx={{ _web: { fontSize: rf(1.5), fontWeight: '$bold' } }}>
            Send
          </Text>
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
          <Text>Do you have an account?</Text>
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
