import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./slices/appSlice";

export const store = configureStore({
  reducer: {
    app: AppSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
