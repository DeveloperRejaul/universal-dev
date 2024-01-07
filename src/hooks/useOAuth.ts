/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Google from 'expo-auth-session/providers/google'; 
import * as Facebook from 'expo-auth-session/providers/facebook';

import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { storage } from 'src/utils/storage';


// google information
const GOOGLE_API_URL = 'https://www.googleapis.com/userinfo/v2/me';
const GOOGLE_WEB_CLIENT_ID = '906303843926-r6f3iik126j11hdbcqkvint14673pthi.apps.googleusercontent.com';
const GOOGLE_IOS_CLIENT_ID = '906303843926-hnqf098i1bfmemd1r03trttqhgmb8f3d.apps.googleusercontent.com';
const GOOGLE_ANDROID_CLIENT_ID = '906303843926-o8u95pej0a076h9vrdqs2a6jd15lq557.apps.googleusercontent.com';

// facebook information
const FACEBOOK_API_URL = '';
const FACEBOOK_WEB_CLIENT_ID = '';
const FACEBOOK_IOS_CLIENT_ID = '';
const FACEBOOK_ANDROID_CLIENT_ID = '';


WebBrowser.maybeCompleteAuthSession();
export const useOAuth = () => {
  const [googleUserInfo, setGoogleUserInfo] = useState(null);
  const [facebookUserInfo, setFacebookUserInfo] = useState(null);
  const [githubUserInfo, setGithubUserInfo] = useState(null);

  // HOOK CALL FOR GOOGLE AUTH 
  const [_req, googleResponse, googlePromptAsync] = Google.useAuthRequest({
    androidClientId:GOOGLE_ANDROID_CLIENT_ID,
    iosClientId:GOOGLE_IOS_CLIENT_ID,
    webClientId:GOOGLE_WEB_CLIENT_ID
  });

  // HOOK CALL FOR FACEBOOK AUTH 
  const [req, res, action] = Facebook.useAuthRequest({
    clientId:'928788738700930',
    clientSecret:'4d0ba7c1fd7df3512018ae873032bdc1',
  });

  useEffect(()=>{console.log(res);
  },[res]);

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

  // GET GOOGLE USER INFORMATION 
  const getGoogleUserInfo = async (token: string) =>{
    await storage.saveAsyncData({key:'@googleAuth',data:token});
    const result = await fetch(GOOGLE_API_URL , { headers:{ Authorization: `Bearer  ${token}`}});
    const userInfo = await result.json();
    setGoogleUserInfo(userInfo);
  }; 


  return{googlePromptAsync,googleUserInfo};
};