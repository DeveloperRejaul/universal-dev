
import React, { ReactElement, createContext, useContext, useState } from 'react'

type contextType = object
type AppProps = {
    children:ReactElement 
}

export const Context = createContext<contextType>({})


export default function AppContext({children}:AppProps) {
  
  return (
    <Context.Provider value={{}}>
      {children}
    </Context.Provider>
  )
}