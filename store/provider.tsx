// src/providers/counter-store-provider.tsx
'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import {
    type FilterStore,
    createFilterStore,
    initFilterStore,
} from '@/store'

export type FilterStoreApi = ReturnType<typeof createFilterStore>

export const FilterStoreContext = createContext<FilterStoreApi | undefined>(
    undefined,
)

export interface FilterStoreProviderProps {
    children: ReactNode
}

export const FilterStoreProvider = ({
    children,
}: FilterStoreProviderProps) => {
    const storeRef = useRef<FilterStoreApi>(null)
    if (!storeRef.current) {
        storeRef.current = createFilterStore(initFilterStore())
    }

    return (
        <FilterStoreContext.Provider value={storeRef.current}>
            {children}
        </FilterStoreContext.Provider>
    )
}

export const useFilterStore = <T,>(
    selector: (store: FilterStore) => T,
): T => {
    const filterStoreContext = useContext(FilterStoreContext)

    if (!filterStoreContext) {
        throw new Error(`useFilterStore must be used within FilterStoreProvider`)
    }

    return useStore(filterStoreContext, selector)
}
