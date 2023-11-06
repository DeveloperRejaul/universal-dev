import { rf, rh } from 'src/constants/dimensions';
import { Box, Pressable, Text } from '@gluestack-ui/themed';
import { Input } from '@platform-components';

type appProps = {
  setConfirmPassword?: (value: string) => void;
  passwordConfirmLabel?: string;
  passwordLabel?: string;
  setPassword?: (value: string) => void;
  passwordConfirmPlaceholder?: string;
  passwordPlaceholder?: string;
  handleSend?: () => void;
};

export default function ConfirmPassword({
  setConfirmPassword,
  setPassword,
  passwordLabel,
  passwordPlaceholder,
  handleSend,
  passwordConfirmLabel,
  passwordConfirmPlaceholder,
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
        <Input
          label={passwordLabel ? passwordLabel : 'Password'}
          placeholder={
            passwordPlaceholder ? passwordPlaceholder : 'Enter Password'
          }
          onChangeText={setPassword}
        />
        <Input
          label={
            passwordConfirmLabel ? passwordConfirmLabel : 'Confirm Password'
          }
          placeholder={
            passwordConfirmPlaceholder
              ? passwordConfirmPlaceholder
              : 'Enter Password'
          }
          onChangeText={setConfirmPassword}
        />
        <Pressable
          bg='#ed5684'
          justifyContent='center'
          alignItems='center'
          borderRadius={5}
          w={'100%'}
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
      </Box>
    </Box>
  );
}
