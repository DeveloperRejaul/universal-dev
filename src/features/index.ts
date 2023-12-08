import authReducer from 'src/features/authentication/slice';
import drawerReducer from './drawer/slice/slice';

export const reducers = {
  auth: authReducer,
  drawer: drawerReducer,
};
