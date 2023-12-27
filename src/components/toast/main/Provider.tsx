import React, { useEffect, useRef, useState } from "react";
import { PropsWithChildren, ToastType } from "./types";
import { ToastCom } from "../Toast";

export const ToastContext = React.createContext({} as ToastType);

export let GlobalToast: ToastType

export const ToastProvider = ({ children, ...props }:PropsWithChildren) => {
  const toastRef = useRef(null);
  const [refState, setRefState] = useState({});

  useEffect(() => {
    setRefState(toastRef.current as any);
    GlobalToast = toastRef.current as any
  }, []);


  return (
    <ToastContext.Provider value={refState as any}>
      {children}
      <ToastCom {...{props,toastRef}}/>
    </ToastContext.Provider>
  );
};


