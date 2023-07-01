import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { alarmsApi } from './alarmSlice';

export const store = configureStore({
  reducer: {
    [alarmsApi.reducerPath]: alarmsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(), 
    alarmsApi.middleware,
  ],
});

setupListeners(store.dispatch);
