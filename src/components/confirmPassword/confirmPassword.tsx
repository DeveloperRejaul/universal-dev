import { rf, rh } from 'src/constants/dimensions';
import { Box, Pressable, Text } from '@gluestack-ui/themed';
import { Input } from '@platform-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type appProps = {
  setConfirmPassword?: (value: string) => void;
  passwordConfirmLabel?: string;
  passwordLabel?: string;
  setPassword?: (value: string) => void;
  passwordConfirmPlaceholder?: string;
  passwordPlaceholder?: string;
  handleSend?: (values: object) => void;
};

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default function ConfirmPassword({
  passwordLabel,
  passwordPlaceholder,
  handleSend,
  passwordConfirmLabel,
  passwordConfirmPlaceholder,
}: appProps) {
  const { setFieldValue, handleSubmit, errors, touched } = useFormik({
    initialValues: { password: '', confirmPassword: '' },
    validationSchema,
    onSubmit: handleSend,
  });

  const setPassword = (password: string) => setFieldValue('password', password);
  const setConfirmPassword = (conPassword: string) =>
    setFieldValue('confirmPassword', conPassword);

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
          type='password'
          label={passwordLabel ? passwordLabel : 'Password'}
          placeholder={
            passwordPlaceholder ? passwordPlaceholder : 'Enter Password'
          }
          onChangeText={setPassword}
          error={errors.password && touched.password ? errors.password : ''}
        />
        <Input
          type='password'
          label={
            passwordConfirmLabel ? passwordConfirmLabel : 'Confirm Password'
          }
          placeholder={
            passwordConfirmPlaceholder
              ? passwordConfirmPlaceholder
              : 'Enter Password'
          }
          onChangeText={setConfirmPassword}
          error={
            errors.confirmPassword && touched.confirmPassword
              ? errors.confirmPassword
              : ''
          }
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
          onPress={handleSubmit}>
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
