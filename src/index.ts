// Export store, plus any relevant types
export { store, makeStore } from './redux/store';
export type { AppStore, AppState, AppDispatch } from './redux/store';

// Export slice actions (and optionally the slice’s state interface)
export { increment, incrementByAmount } from './redux/counterSlice';
export type { CounterState } from './redux/counterSlice';

// Export your Redux provider (client component)
export { ReduxProvider } from './providers/ReduxProvider';

// Export components
export { Button } from './components/Button';

// Export utilities
export { capitalize } from './utils/capitalize';
