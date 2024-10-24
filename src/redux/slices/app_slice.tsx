/* eslint-disable @typescript-eslint/no-explicit-any */
import {createSlice} from '@reduxjs/toolkit';
import IAppState from '../redux_modal/app_modal';
import {RootState} from '../rootReducer';

const DEFAULT_STATE: IAppState = {
  appSliceStatus: undefined,
};

const INITIAL_STATE: IAppState = {
  ...DEFAULT_STATE,
};

const app_slice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    resetApp: () => {
      return DEFAULT_STATE;
    },
  },
});

export const {resetApp} = app_slice.actions;

export const selectAppSliceStatus = (state: RootState) =>
  state.app.appSliceStatus;

export default app_slice;
