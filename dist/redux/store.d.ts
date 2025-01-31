import { CounterState } from './counterSlice';
export interface RootState {
    counter: CounterState;
}
export declare function makeStore(): import("@reduxjs/toolkit").EnhancedStore<{
    counter: CounterState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        counter: CounterState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    counter: CounterState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        counter: CounterState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
//# sourceMappingURL=store.d.ts.map