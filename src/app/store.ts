import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import TodoReducer from "../features/Todo/Todo.Slice";
export const store = configureStore({
  reducer: {
    task: TodoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
