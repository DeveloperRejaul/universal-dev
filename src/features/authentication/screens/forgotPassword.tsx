import { Input } from '@platform-components';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, GSBox, GSPressable, GSText } from '@components';
import { rh } from 'src/constants/dimensions';

type appProps = {
  emailPlaceholder?: string;
  setEmail?: (value: string) => void;
  handleLogin?: () => void;
  handleSignUP?: () => void;
  handleSend?: (values: any) => void;
  isLoading?: boolean;
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
});

export default function ForgotPassword({
  isLoading,
  emailPlaceholder,
  handleLogin,
  handleSignUP,
  handleSend,
}: appProps) {
  const { setFieldValue, handleSubmit, errors, touched } = useFormik({
    initialValues: { email: '' },
    validationSchema,
    onSubmit: handleSend,
  });
  const setEmail = (email: string) => setFieldValue('email', email);

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
        <GSText
          fontWeight='$semibold'
          color='$coolGray800'
          fontSize={'$lg'}
          textAlign='center'>
          Enter Email Address
        </GSText>
        <Input
          placeholder={emailPlaceholder ? emailPlaceholder : 'Enter email'}
          onChangeText={setEmail}
          error={errors.email && touched.email ? errors.email : ''}
        />
        <GSPressable onPress={handleLogin}>
          <GSText
            fontSize={'$sm'}
            fontWeight='$normal'
            color='$coolGray500'
            textAlign='center'>
            Back to login
          </GSText>
        </GSPressable>
        <Button onPress={handleSubmit} text='Send' isLoading={isLoading} />
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
          <GSText>Do you have an account?</GSText>
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
