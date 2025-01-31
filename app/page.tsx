// app/page.tsx
'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '@/src/redux/store';
import { increment } from '@/src/redux/counterSlice';
import { Button } from '@/src';

export default function HomePage() {
  const count = useSelector((state: AppState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-2xl font-bold">Demo HomePage</h1>
      <p>Counter: {count}</p>
      <Button onClick={() => dispatch(increment())} label="Increment" />
    </div>
  );
}
