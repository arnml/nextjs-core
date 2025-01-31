// src/providers/ReduxProvider.tsx
'use client'; 
// If you're using React-Redux Provider on the client side.

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
