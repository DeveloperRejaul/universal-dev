import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/rtk/store';
export const useAppDispatch: () => AppDispatch = useDispatch;
