import { useContext } from "react";
import { Context } from "src/context/AppContext";

export const useAppContext = ()=> useContext(Context);