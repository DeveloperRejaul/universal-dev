import { useToast } from "react-native-toast-notifications"

export const useAppToast = () => {
  const {hide, hideAll,show,isOpen,update} = useToast();
  
}