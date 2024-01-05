import { Input } from '@platform-components';
import React, { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Button} from '@components';
import { Pressable, View } from 'react-native';
import { Text } from 'react-native';
import { useFrom } from '@hooks/useForm';
import { verificationProps } from '../type';
import OAuth from './OAuth';

let timeout: NodeJS.Timeout;
let interval: NodeJS.Timeout;

const validationSchema = Yup.object().shape({
  otp1: Yup.string().max(1).required(),
  otp2: Yup.string().max(1).required(),
  otp3: Yup.string().max(1).required(),
  otp4: Yup.string().max(1).required(),
});


export default function Verification({ handleSignUP, handleSend, handleResend, isLoading }: verificationProps) {

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
      <View className='gap-y-4 base:w-[90%] web:w-[70%] lg:w-[50%]'>
        <Text className='font-semibold text-coolGray800 text-lg text-center'> Enter Verification Code</Text>
        
        <View className='flex-row justify-center'>
          <Controller 
            name='otp1'
            render={({onChange})=>{
              return <Input onChangeText={onChange} className='mx-2' containerStyle={{width:40}} maxLength={1} inputStyle={{textAlign:'center'}} />;
            }}
          />
          <Controller 
            name='otp2'
            render={({onChange})=>{
              return <Input onChangeText={onChange} className='mx-2' containerStyle={{width:40}} maxLength={1} inputStyle={{textAlign:'center'}} />;
            }}
          />
          <Controller 
            name='otp3'
            render={({onChange})=>{
              return <Input onChangeText={onChange} className='mx-2' containerStyle={{width:40}} maxLength={1} inputStyle={{textAlign:'center'}} />;
            }}
          />
          <Controller 
            name='otp4'
            render={({onChange})=>{
              return <Input onChangeText={onChange} className='mx-2' containerStyle={{width:40}} maxLength={1} inputStyle={{textAlign:'center'}} />;
            }}
          />
        </View>
        


        <View className='justify-center web:gap-x-1'>
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
        <OAuth />
        <View className='flex-row justify-center web:gap-x-1'>
          <Text>Do you have an account?</Text>
          <Pressable onPress={handleSignUP}>
            <Text className='uppercase underline font-medium'> Sing up </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
