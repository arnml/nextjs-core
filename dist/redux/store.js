import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
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
//# sourceMappingURL=store.js.map