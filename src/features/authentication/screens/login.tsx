import { rh, rw } from 'src/constants/dimensions';
import { Checkbox, Input } from '@platform-components';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, GSBox, GSPressable, GSText } from '@components';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password is required'),
  isRemember: Yup.boolean(),
});
type appProps = {
  title?: string;
  emailLabel?: string;
  passwordLabel?: string;
  emailPlaceholder?: string;
  passwordPlaceholder?: string;
  handleSignUP?: () => void;
  handleLogin?: (values: any) => object;
  handleForgotPassword?: () => void;
  handleGoogleLogin?: () => void;
  handleFacebookLogin?: () => void;
  handleGithubLogin?: () => void;
  isLoading?: boolean;
};

export default function SimpleLogin({
  title,
  emailLabel,
  passwordLabel,
  emailPlaceholder,
  passwordPlaceholder,
  handleSignUP,
  handleForgotPassword,
  handleLogin,
  isLoading,
  handleFacebookLogin,
  handleGithubLogin,
  handleGoogleLogin,
}: appProps) {
  const formik = useFormik({
    initialValues: { email: '', password: '', isRemember: false },
    validationSchema,
    onSubmit: handleLogin,
  });
  const setEmail = (email: string) => formik.setFieldValue('email', email);
  const setPassword = (password: string) =>
    formik.setFieldValue('password', password);
  const setIsRemember = (isRemember: boolean) =>
    formik.setFieldValue('isRemember', isRemember);

  const { errors, touched } = formik;

  return (
    <GSBox
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
      <GSBox
        rowGap={rh(2)}
        w={'90%'}
        sx={{ _web: { w: '70%' }, '@lg': { _web: { w: '50%' } } }}>
        <GSText fontSize={'$2xl'} color='$trueGray800' fontWeight='$semibold'>
          {title ? title : 'Login'}
        </GSText>

        <Input
          value={formik.values.email}
          onChangeText={setEmail}
          label={emailLabel ? emailLabel : 'Email'}
          placeholder={emailPlaceholder ? passwordPlaceholder : 'Enter email'}
          error={errors.email && touched.email ? errors.email : ''}
        />

        <Input
          value={formik.values.password}
          onChangeText={setPassword}
          label={passwordLabel ? passwordLabel : 'Password'}
          placeholder={
            passwordPlaceholder ? passwordPlaceholder : 'Enter password'
          }
          error={errors.password && touched.password ? errors.password : ''}
          type='password'
        />
        <GSBox
          flexDirection='row'
          alignItems='center'
          w={'100%'}
          sx={{
            _web: { columnGap: 2, marginLeft: -4 },
            columnGap: rw(2),
          }}>
          <Checkbox background='#ed5684' size={1.3} onCheck={setIsRemember} />
          <GSText> Remember me ? </GSText>
        </GSBox>
        <Button
          onPress={formik.handleSubmit}
          text='Login'
          isLoading={isLoading}
        />
        <GSPressable onPress={handleForgotPassword}>
          <GSText textAlign='right'>Forgot password?</GSText>
        </GSPressable>

        <GSBox
          flexDirection='row'
          w={'100%'}
          justifyContent='center'
          alignItems='center'>
          <GSBox w={'45%'} height={'$0.5'} bg='$coolGray200' />
          <GSBox
            w={'10%'}
            justifyContent='center'
            alignItems='center'
            h={30}
            borderColor='$coolGray200'
            borderWidth={'$2'}
            borderRadius={'$sm'}>
            <GSText color='$coolGray400'>OR</GSText>
          </GSBox>
          <GSBox w={'45%'} height={'$0.5'} bg='$coolGray200' />
        </GSBox>

        <GSBox
          flexDirection='row'
          justifyContent='center'
          columnGap='$7'
          marginTop={'$1'}>
          <GSPressable
            onPress={handleGoogleLogin}
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
          </GSPressable>
          <GSPressable
            onPress={handleFacebookLogin}
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
          </GSPressable>
          <GSPressable
            onPress={handleGithubLogin}
            sx={{
              height: '$8',
              width: '$8',
              borderRadius: '$full',
              borderWidth: 3,
              borderColor: '#000000',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome name='github' size={18} color='#000000' />
          </GSPressable>
        </GSBox>
        <GSBox flexDirection='row' justifyContent='center' columnGap={'$1.5'}>
          <GSText>Need an account?</GSText>
          <GSPressable onPress={handleSignUP}>
            <GSText
              textTransform='uppercase'
              textDecorationLine='underline'
              fontWeight='$medium'>
              Sing up
            </GSText>
          </GSPressable>
        </GSBox>
      </GSBox>
    </GSBox>
  );
}
