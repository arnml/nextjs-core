import { configureStore } from '@reduxjs/toolkit';
import counterReducer, { CounterState } from './counterSlice';

// 1) Option: Provide a root state interface so the store doesn't create an "anonymous" type.
export interface RootState {
  counter: CounterState;
}

// 2) If you need a "makeStore" function (for SSR or advanced usage):
export function makeStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
}

// 3) Create a store instance (for typical usage):
export const store = makeStore();

// 4) Export typed store helpers:
export type AppStore = ReturnType<typeof makeStore>;

// You can define AppState either as an explicit RootState or from the store:
export type AppState = ReturnType<AppStore['getState']>;
// or: export type AppState = RootState;

export type AppDispatch = AppStore['dispatch'];
