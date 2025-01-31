// app/page.tsx
'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/counterSlice';
import Button from '../components/Button';

export default function HomePage() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Welcome to Core HomePage</h1>
      <p className="text-lg">Counter: {count}</p>
      <Button onClick={() => dispatch(increment())} label="Increment" />
    </div>
  );
}
