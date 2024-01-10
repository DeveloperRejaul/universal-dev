import {Text, View } from 'react-native';
import React from 'react';
import { Button } from '@components';
import { storage } from 'src/utils/storage';
import { useRouter } from 'expo-router';
import { useToast } from '@hooks/useToast';
import { useAppContext } from '@hooks/useAppContext';

export default function index() {
  const {replace} = useRouter();
  const {show} = useToast();
  const {socket} = useAppContext();

  const handleLogout = async () => {
    await storage.deleteAsyncData({key:'@authToken'});
    show('Logout successful' ,{type:'success'});
    socket?.disconnect();
    setTimeout(()=>{
      replace('/auth/login');
    },1000);
  };


  return (
    <View>
      <Text>Profile</Text>
      <Button text='Logout' onPress={handleLogout} />
    </View>
  );
}
