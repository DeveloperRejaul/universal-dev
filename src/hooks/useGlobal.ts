import { useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';
import { storage } from 'src/utils/storage';

export const useGlobal = () => {
  const [socket, setSocket ] = useState<Socket | null> (null);

  useEffect (()=>{
    const init = async ()=>{
      const token = await storage.getAsyncData({key:'@authToken'});
      if(token === 'error' && socket !== null)return;
      const socketIo: Socket = io(process.env.EXPO_PUBLIC_SOCKET_URL, { extraHeaders: { token: `Bearer ${token}`},autoConnect:false});
      setSocket(socketIo);
    };
    init();
  },[]);

  return {socket};
};