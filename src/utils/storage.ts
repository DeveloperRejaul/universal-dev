import AsyncStorage from '@react-native-async-storage/async-storage';

interface ISaveAsyncData {
  key: '@googleAuth' | '@facebookAuth' | '@githubAuth';
  data: string
}
  
interface IGetAsyncData {
  key: '@googleAuth' | '@facebookAuth' | '@githubAuth';
}
  
interface IObjectStorage {
  saveAsyncData: ({key, data}: ISaveAsyncData) => Promise<'success'|'error'>;
  getAsyncData: ({key}: IGetAsyncData) => Promise<string>;
  deleteAsyncData: ({key}: IGetAsyncData) => Promise<'success'|'error'>;
  updateAsyncData: ({key, data}: ISaveAsyncData) => Promise<'success'|'error'>;
  deleteAllAsyncData: () => Promise<'success'|'error'>;
}




export const storage: IObjectStorage = {
  
  saveAsyncData : async ({key, data}) =>{
    try {
      await AsyncStorage.setItem(key, data);
      return 'success';
    } catch (err) {
      console.log('🚀 ~ file: storage.ts:16 ~ saveAsyncData: ~ err:', err);
      return 'error';
    }
  },

  getAsyncData: async ({key})=>{
    try {
      const data = await AsyncStorage.getItem(key);
      if(data) return data;
      return 'error';
    } catch (err) {
      console.log('🚀 ~ file: storage.ts:29 ~ getAsyncData: ~ err:', err);
      return 'error';
    }
  },

  deleteAsyncData:async ({key})=>{
    try {
      await AsyncStorage.removeItem(key);
      return 'success';
    } catch (err) {
      console.log('🚀 ~ file: storage.ts:37 ~ err:', err);
      return 'error';
    }
  },

  updateAsyncData: async ({data,key})=>{
    try {
      await AsyncStorage.removeItem(key);
      await AsyncStorage.setItem(key, data);
      return 'success';
    } catch (err) {
      console.log('🚀 ~ file: storage.ts:45 ~ updateAsyncData: ~ err:', err);
      return'error';
    }
  },

  deleteAllAsyncData: async ()=>{
    try {
      await AsyncStorage.clear();
      return 'success';
    } catch (err) {
      console.log('🚀 ~ file: storage.ts:64 ~ deleteAllAsyncData: ~ err:', err);
      return 'error';
    }
  }
};