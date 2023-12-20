import React from 'react'
import { ToastProvider } from 'react-native-toast-notifications'

type Props = {
  children: string | JSX.Element | JSX.Element[]
}
export default function ToastContainer({children}:Props) {
  return (
    <ToastProvider>
      {children}
    </ToastProvider>
  )
}
