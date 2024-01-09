import { Input } from '@platform-components';
import * as Yup from 'yup';
import { Button } from '@components';
import { View } from 'react-native';
import React from 'react';
import { useFrom } from '@hooks/useForm';
import { confirmPasswordProps } from '../type';



const validationSchema = Yup.object().shape({
  password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Password is required'),
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});

export default function ConfirmPassword(props: confirmPasswordProps) {

  const {
    passwordLabel,
    passwordPlaceholder,
    handleSend,
    passwordConfirmLabel,
    passwordConfirmPlaceholder,
    isLoading,
  } = props;

  const {Controller,errors,handleSubmit} = useFrom({initialState: { password: '', confirmPassword: '' },schema:validationSchema});
    

  return (
    <View className='bg-light100 shadow-black justify-center items-center base:w-full base:h-full md:w-[60%] md:h-[60%] lg:w-[50%] lg:h-[80%]'>
      <View className='gap-y-4 base:w-[90%] web:w-[70%] lg:w-[50%]'>
        
        <Controller 
          name='password'
          render={({onChange})=>(
            <Input
              type='password'
              label={passwordLabel || 'Password'}
              placeholder={ passwordPlaceholder || 'Enter Password'}
              onChangeText={onChange}
              error={errors.password ? errors.password : ''}
            />)}
        />
        <Controller 
          name='confirmPassword'
          render={({onChange})=>(
            <Input
              type='password'
              label={ passwordConfirmLabel || 'Confirm Password'}
              placeholder={passwordConfirmPlaceholder || 'Enter Password'}
              onChangeText={onChange}
              error={ errors.confirmPassword ? errors.confirmPassword : ''}
            />
          )}
        />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Button isLoading={isLoading} text='Send' onPress={()=>handleSend(handleSubmit())} />
      </View>
    </View>
  );
}
