import {combineReducers} from '@reduxjs/toolkit';
import app_slice from './slices/app_slice';
import formSlice from './slices/formSlice';

const rootReducer = combineReducers({
  app: app_slice.reducer,
  from:formSlice.reducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
