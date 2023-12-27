import { ToastType } from './../components/toast/main/types';
import { useContext } from "react";
import {ToastContext } from "../components/toast/main/Provider";

export const useToast = (): ToastType => useContext(ToastContext);