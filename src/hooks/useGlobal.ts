import { io } from 'socket.io-client';

const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwiaWQiOiI2NTliYWExZDUyMzljYjk5Zjk4ZGE4YTIiLCJpYXQiOjE3MDQ3Mjk2NjksImV4cCI6MTcwNTMzNDQ2OX0.CoIyTiC9BIZZq3zFrfZ3olujnjye4lwM7HAydUPTzYI';

const socket = io(process.env.EXPO_PUBLIC_SOCKET_URL, { extraHeaders: { token: `Bearer ${token}`} ,});
export const useGlobal = () => {};