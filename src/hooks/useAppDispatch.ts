import {useDispatch } from "react-redux";
import { AppDispatch} from "src/rtk/store/store";
export const useAppDispatch: () => AppDispatch = useDispatch;