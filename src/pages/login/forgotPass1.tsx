import { Input } from '@platform-components';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@components';
import { rh } from 'src/constants/dimensions';
import { Pressable, View } from 'react-native';
import { Text } from 'react-native';
import { useToken } from '@hooks/useToken';

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


const googleColor = useToken("colors", "red500")
const fbColor = useToken("colors", "blue800")
const gitColor = useToken("colors", "black")



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
    <View className='bg-light100 shadow-black justify-center items-center base:w-full base:h-full md:w-[60%] md:h-[60%] lg:w-[50%] lg:h-[80%]'>
      <View className='space-y-4 base:w-[90%] web:w-[70%] lg:w-[50%]'>
        <Text className='font-semibold text-coolGray800 text-lg text-center'>
          Enter Email Address
        </Text>
        <Input
          placeholder={emailPlaceholder ? emailPlaceholder : 'Enter email'}
          onChangeText={setEmail}
          error={errors.email && touched.email ? errors.email : ''}
        />
        <Pressable onPress={handleLogin}>
          <Text className='text-sm font-normal text-coolGray500 text-center'>
            Back to login
          </Text>
        </Pressable>
        <Button onPress={handleSubmit} text='Send' isLoading={isLoading} />

        <View className='flex-row w-[100%] justify-center items-center'>
          <View className='w-[45%] h-1 bg-coolGray200'/>
          <View className='w-[10%] justify-center items-center h-10 border-coolGray200 border-2 rounded-sm'>
            <Text className='text-coolGray400'>OR</Text>
          </View>
          <View className='w-[45%] h-1 bg-coolGray200'/>
        </View>
        <View className='flex-row justify-center space-x-7 mt-1'>
          <Pressable
            onPress={()=>{}}
            className='h-8 w-8 rounded-full border-2 border-red500 justify-center items-center'>
            <AntDesign name='google' size={20} color={googleColor} />
          </Pressable>
          <Pressable
            onPress={()=>{}}
            className='h-8 w-8 rounded-full border-2 border-blue800 justify-center items-center'>
            <FontAwesome name='facebook-f' size={20} color={fbColor} />
          </Pressable>
          <Pressable
            onPress={()=>{}}
            className='h-8 w-8 rounded-full justify-center items-center border-2' >
            <FontAwesome name='github' size={18} color={gitColor} />
          </Pressable>
        </View>

        <View className='flex-row justify-center pace-x-1'>
          <Text>Do you have an account?</Text>
          <Pressable onPress={handleSignUP}>
            <Text className='uppercase underline font-medium'>
              Sing up
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
