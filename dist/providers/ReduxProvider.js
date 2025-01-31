// src/providers/ReduxProvider.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { store } from '../redux/store';
export function ReduxProvider({ children }) {
    return _jsx(Provider, { store: store, children: children });
}
//# sourceMappingURL=ReduxProvider.js.map