import { rh } from 'src/constants/dimensions';
import { Input } from '@platform-components';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useToast from '@hooks/useToast';
import { Button, GSBox, GSPressable, GSText } from '@components';
import { View } from 'react-native';

let timeout: any;
let interval: any;
type appProps = {
  handleSignUP?: () => void;
  handleSend?: (values: object) => void;
  handleResend?: () => void;
  isLoading?: boolean;
};

const validationSchema = Yup.object().shape({
  otp1: Yup.string().max(1).required(),
  otp2: Yup.string().max(1).required(),
  otp3: Yup.string().max(1).required(),
  otp4: Yup.string().max(1).required(),
});

export default function Verification({
  handleSignUP,
  handleSend,
  handleResend,
  isLoading,
}: appProps) {
  const { handleSubmit, setFieldValue, isValid } = useFormik({
    initialValues: { otp1: '', otp2: '', otp3: '', otp4: '' },
    validationSchema,
    onSubmit: handleSend,
  });
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);
  const { showToast } = useToast();

  const [resend, setResend] = useState(false);
  const [time, setTime] = useState('00:00');

  useEffect(() => {
    if (input1.current) input1.current.focus();
  }, []);

  const handleResendStatus = () => {
    handleResend?.();
    setResend(true);
    let secund = 0;
    interval = setInterval(() => {
      secund++;
      const minutes = Math.floor(secund / 60)
        .toString()
        .padStart(2, '0');
      const s = (secund % 60).toString().padStart(2, '0');
      setTime(`${minutes}:${s}`);
    }, 1000);
    setTimeout(() => {
      setResend(false);
      clearTimeout(timeout);
      clearInterval(interval);
    }, 60000);
  };

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
          Enter Verification Code
        </GSText>
        <View className='flex-1 justify-center items-center flex-row space-x-3'>
          <Input
            ref={input1}
            onChangeText={(text: string) => {
              setFieldValue('otp1', text);
              if (text.length >= 1 && input2.current) input2.current.focus();
            }}
            maxLength={1}
            containerStyle={{ width: 40 }}
            inputStyle={{ textAlign: 'center' }}
          />
          <Input
            ref={input2}
            onChangeText={(text: string) => {
              setFieldValue('otp2', text);
              if (text.length >= 1 && input3.current) input3.current.focus();
            }}
            maxLength={1}
            containerStyle={{ width: 40 }}
            inputStyle={{ textAlign: 'center' }}
          />
          <Input
            ref={input3}
            onChangeText={(text: string) => {
              setFieldValue('otp3', text);
              if (text.length >= 1 && input4.current) input4.current.focus();
            }}
            maxLength={1}
            containerStyle={{ width: 40 }}
            inputStyle={{ textAlign: 'center' }}
          />
          <Input
            ref={input4}
            onChangeText={(text: string) => {
              setFieldValue('otp4', text);
            }}
            maxLength={1}
            containerStyle={{ width: 40 }}
            inputStyle={{ textAlign: 'center' }}
          />
        </View>
        <GSBox justifyContent='center' columnGap={'$1'}>
          <GSText
            fontSize={'$sm'}
            fontWeight='$normal'
            color='$coolGray500'
            textAlign='center'>
            If you don't resive code
          </GSText>
          <GSPressable onPress={handleResendStatus} disabled={resend}>
            <GSText
              fontWeight='$semibold'
              color={resend ? '#ed568341' : '#ed5684'}>
              Resend
            </GSText>
          </GSPressable>
          {resend && <GSText ml={'$2'}>{time}</GSText>}
        </GSBox>
        <Button
          onPress={() => {
            handleSubmit?.();
            if (!isValid)
              showToast({
                message: 'Please fill up all field',
                title: 'Warning',
                action: 'error',
              });
          }}
          text='Send'
          isLoading={isLoading}
        />

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
