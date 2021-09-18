import React from 'react';
import { AppAction } from '../store/reducer';
import { State } from '../store/types';

type ContextProps = {
    store: State;
    dispatch: React.Dispatch<AppAction>;
};

/**
 * Creates a Context and Provider with no upfront default value
 * and without having to check for undefined all the time
 * 
 * @returns Provider and Context
 */
function createCtx<T extends {} | null>() {
    const ctx = React.createContext<T | undefined>(undefined);
    function useStore() {
        const c = React.useContext(ctx);
        if (c === undefined)
            throw new Error("useStore must be inside a Provider with a value");
        return c;
    }
    return [useStore, ctx.Provider] as const;
}

export const [useStore, Provider] = createCtx<ContextProps>();