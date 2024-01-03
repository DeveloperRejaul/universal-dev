import { Input } from '@platform-components';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Button} from '@components';
import { Pressable, View } from 'react-native';
import { Text } from 'react-native';
import { useToken } from '@hooks/useToken';
import { useFrom } from '@hooks/useForm';

let timeout: NodeJS.Timeout;
let interval: NodeJS.Timeout;
type codeType = {
  otp1: number;
  otp2: number;
  otp3: number;
  otp4: number;
};
type appProps = {
  handleSignUP?: () => void;
  handleSend?: (val: codeType ) => void | Promise<void>;
  handleResend?: () => void;
  isLoading?: boolean;
};

const validationSchema = Yup.object().shape({
  otp1: Yup.string().max(1).required(),
  otp2: Yup.string().max(1).required(),
  otp3: Yup.string().max(1).required(),
  otp4: Yup.string().max(1).required(),
});

const googleColor = useToken('colors', 'red500');
const fbColor = useToken('colors', 'blue800');
const gitColor = useToken('colors', 'black');



export default function Verification({ handleSignUP, handleSend, handleResend, isLoading }: appProps) {

  const {Controller,handleSubmit} = useFrom({initialState:{ otp1: '', otp2: '', otp3: '', otp4: '' },schema:validationSchema});

  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);

  const [resend, setResend] = useState(false);
  const [time, setTime] = useState('00:00');

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    if (input1.current) input1.current.focus();
  }, []);

  const handleResendStatus = () => {
    handleResend?.();
    setResend(true);
    let secund = 0;
    interval = setInterval(() => {
      secund++;
      const minutes = Math.floor(secund / 60).toString().padStart(2, '0');
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
    <View className='bg-light100 shadow-black justify-center items-center base:w-full base:h-full md:w-[60%] md:h-[60%] lg:w-[50%] lg:h-[80%]' >
      <View className='space-y-4 base:w-[90%] web:w-[70%] lg:w-[50%]'>
        <Text className='font-semibold text-coolGray800 text-lg text-center'> Enter Verification Code</Text>
        <View className='flex-1 justify-center items-center flex-row space-x-3'>

          <Controller name='otp1'
            render={({onChange})=> (
              <Input
                ref={input1}
                onChangeText={(text: string) => {
                  onChange(text);
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  if (text.length >= 1 && input2.current) input2.current.focus();
                }}
                maxLength={1}
                containerStyle={{ width: 40 }}
                inputStyle={{ textAlign: 'center' }}
              />
            )}
          />
          <Controller name='otp2'
            render={({onChange})=> (
              <Input
                ref={input2}
                onChangeText={(text: string) => {
                  onChange(text);
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  if (text.length >= 1 && input3.current) input3.current.focus();
                }}
                maxLength={1}
                containerStyle={{ width: 40 }}
                inputStyle={{ textAlign: 'center' }}
              />
            )}
          />
          <Controller name='otp3'
            render={({onChange})=> (
              <Input
                ref={input3}
                onChangeText={(text: string) => {
                  onChange(text);
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  if (text.length >= 1 && input4.current) input4.current.focus();
                }}
                maxLength={1}
                containerStyle={{ width: 40 }}
                inputStyle={{ textAlign: 'center' }}
              />
            )}
          />

          <Controller name='otp4'
            render={({onChange})=> (
              <Input
                ref={input3}
                onChangeText={(text: string) => {
                  onChange(text);
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  if (text.length >= 1 && input4.current) input4.current.focus();
                }}
                maxLength={1}
                containerStyle={{ width: 40 }}
                inputStyle={{ textAlign: 'center' }}
              />
            )}
          />
        </View>
        <View className='justify-center space-x-1'>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Text className='text-sm font-normal text-coolGray500 text-center'> If you don't resive code </Text>
          <Pressable onPress={handleResendStatus} disabled={resend}>
            <Text className={`font-semibold text-${resend?'red400':'red500'}`}>Resend</Text>
          </Pressable>
          {resend && <Text className='ml-2'>{time}</Text>}
        </View>
        <Button
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onPress={()=>handleSend(handleSubmit())}
          text='Send'
          isLoading={isLoading}
        />

        <View className='flex-row w-[100%] justify-center items-center'>
          <View className='w-[45%] h-1 bg-coolGray200' />
          <View className='w-[10%] justify-center items-center h-10 border-coolGray200 border-2 rounded-sm'>
            <Text className='text-coolGray400'>OR</Text>
          </View>
          <View className='w-[45%] h-1 bg-coolGray200' />
        </View>

        <View className='flex-row justify-center space-x-7 mt-1'>
          <Pressable
            onPress={()=>{}}
            className='h-8 w-8 rounded-full border-2 border-red500 justify-center items-center'
          >
            <AntDesign name='google' size={20} color={googleColor} />
          </Pressable>
          <Pressable
            onPress={()=>{}}
            className='h-8 w-8 rounded-full border-2 border-blue800 justify-center items-center'
          >
            <FontAwesome name='facebook-f' size={20} color={fbColor} />
          </Pressable>
          <Pressable
            onPress={()=>{}}
            className='h-8 w-8 rounded-full justify-center items-center border-2'
          >
            <FontAwesome name='github' size={18} color={gitColor} />
          </Pressable>
        </View>

        <View className='flex-row justify-center pace-x-1'>
          <Text>Do you have an account?</Text>
          <Pressable onPress={handleSignUP}>
            <Text className='uppercase underline font-medium'> Sing up </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
