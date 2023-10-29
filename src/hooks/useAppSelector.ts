import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "src/rtk/store/store";
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;