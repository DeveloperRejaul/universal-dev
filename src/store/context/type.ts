import React from 'react';
import { Socket } from 'socket.io-client';

export interface IContextType {
  socket: Socket | null,
}
  
export type AppProps = {
  children: React.ReactNode
}