import * as Google from 'expo-auth-session/providers/google'; 
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { storage } from 'src/utils/storage';


// google information
const GOOGLE_API_URL = 'https://www.googleapis.com/userinfo/v2/me';
const GOOGLE_WEB_CLIENT_ID = '906303843926-r6f3iik126j11hdbcqkvint14673pthi.apps.googleusercontent.com';
const GOOGLE_IOS_CLIENT_ID = '906303843926-hnqf098i1bfmemd1r03trttqhgmb8f3d.apps.googleusercontent.com';
const GOOGLE_ANDROID_CLIENT_ID = '906303843926-o8u95pej0a076h9vrdqs2a6jd15lq557.apps.googleusercontent.com';

WebBrowser.maybeCompleteAuthSession();

export const useOAuth = () => {
  const [googleUserInfo, setGoogleUserInfo] = useState();

  // google hook 
  const [_req, googleResponse, googlePromptAsync] = Google.useAuthRequest({
    androidClientId:GOOGLE_ANDROID_CLIENT_ID,
    iosClientId:GOOGLE_IOS_CLIENT_ID,
    webClientId:GOOGLE_WEB_CLIENT_ID
  });

  useEffect(()=>{
    if(googleResponse?.type === 'success' && googleResponse.authentication?.accessToken) getGoogleUserInfo (googleResponse.authentication?.accessToken);
  },[googleResponse]);

  useEffect(()=>{
    const init = async ()=>{
      const googleToken = await storage.getAsyncData({key:'@googleAuth'});
      if(googleToken !== 'error') getGoogleUserInfo(googleToken);
    };
    init();
  },[]);

  const getGoogleUserInfo = async (token: string) =>{
    await storage.saveAsyncData({key:'@googleAuth',data:token});
    const result = await fetch(GOOGLE_API_URL , { headers:{ Authorization: `Bearer  ${token}`}});
    const userInfo = await result.json();
    setGoogleUserInfo(userInfo);
  }; 


  return{googlePromptAsync,googleUserInfo};
};