import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/rtk/store/store';
export const useAppDispatch: () => AppDispatch = useDispatch;
