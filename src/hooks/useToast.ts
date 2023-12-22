import { useContext } from "react";
import { ToastType,ToastContext } from "../components/toast/main/Provider";

export const useToast = (): ToastType => useContext(ToastContext);