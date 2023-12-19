import { rh } from 'src/constants/dimensions';
import { Input } from '@platform-components';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button} from '@components';
import { Text, View } from 'react-native';

type appProps = {
  handleLogin?: () => void;
  title?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  passwordLabel?: string;
  passwordPlaceholder?: string;
  confirmPasswordLabel?: string;
  confirmPasswordPlaceholder?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  onChange?: (value: boolean) => void;
  handleSignUP?: (values: any) => void;
  isLoading?: boolean;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default function SimpleSignUp({
  handleLogin,
  title,
  emailLabel,
  emailPlaceholder,
  passwordLabel,
  passwordPlaceholder,
  confirmPasswordLabel,
  confirmPasswordPlaceholder,
  nameLabel,
  namePlaceholder,
  handleSignUP,
  isLoading,
}: appProps) {
  const { setFieldValue, handleSubmit, errors, touched } = useFormik({
    initialValues: { email: '', password: '', confirmPassword: '', name: '' },
    validationSchema,
    onSubmit: handleSignUP,
  });

  const setName = (name: string) => setFieldValue('name', name);
  const setEmail = (email: string) => setFieldValue('email', email);
  const setPassword = (password: string) => setFieldValue('password', password);
  const setConfirmPassword = (confirmPassword: string) =>
    setFieldValue('confirmPassword', confirmPassword);

  return (
    <View className='bg-light100 shadow-black justify-center items-center base:w-full base:h-full md:w-[60%] md:h-[60%] lg:w-[50%] lg:h-[80%]'>
      <View className='space-y-4 base:w-[90%] web:w-[70%] lg:w-[50%]'>
        <Text className='text-2xl text-trueGray800 font-semibold'>{title ? title : 'Sign Up'}</Text>
        <Input
          label={nameLabel ? nameLabel : 'Full name'}
          placeholder={namePlaceholder ? namePlaceholder : 'Enter full name'}
          onChangeText={setName}
          error={errors.name && touched.name ? errors.name : ''}
        />
        <Input
          label={emailLabel ? emailLabel : 'Email'}
          placeholder={emailPlaceholder ? passwordPlaceholder : 'Enter email'}
          onChangeText={setEmail}
          error={errors.email && touched.email ? errors.email : ''}
        />
        <Input
          label={passwordLabel ? passwordLabel : 'Password'}
          placeholder={
            passwordPlaceholder ? passwordPlaceholder : 'Enter password'
          }
          onChangeText={setPassword}
          type='password'
          error={errors.password && touched.password ? errors.password : ''}
        />
        <Input
          label={
            confirmPasswordLabel ? confirmPasswordLabel : 'Confirm Password'
          }
          placeholder={
            confirmPasswordPlaceholder
              ? confirmPasswordPlaceholder
              : 'Enter password'
          }
          onChangeText={setConfirmPassword}
          error={
            errors.confirmPassword && touched.confirmPassword
              ? errors.confirmPassword
              : ''
          }
          type='password'
        />
        <Button text=' Sing up' onPress={handleSubmit} isLoading={isLoading} />

        <View className='flex-row w-[100%] justify-center items-center'>
          <View className='w-[45%] h-1 bg-coolGray200'/>
          <View className='w-[10%] justify-center items-center h-10 border-coolGray200 border-2 rounded-sm'>
            <GSText color='$coolGray400'>OR</GSText>
          </View>
          <GSBox w={'45%'} height={'$0.5'} bg='$coolGray200' />
        </View>

        <GSBox
          flexDirection='row'
          justifyContent='center'
          columnGap='$7'
          marginTop={'$1'}>
          <GSPressable
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
          </GSPressable>
        </GSBox>
        <GSBox flexDirection='row' justifyContent='center' columnGap={'$1.5'}>
          <GSText>Need an account?</GSText>
          <GSPressable onPress={handleLogin}>
            <GSText
              textTransform='uppercase'
              textDecorationLine='underline'
              fontWeight='$medium'>
              Login
            </GSText>
          </GSPressable>
        </GSBox>
      </View>
    </View>
  );
}
