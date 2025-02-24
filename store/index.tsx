// src/stores/counter-store.ts
import { createStore } from 'zustand/vanilla'

export type FilterStoreState = {
    jobTitle: string
    timePeriod: string
}

export type FilterStoreActions = {
    setJobTitle: (jobTitle: string) => void
    setTimePeriod: (timePeriod: string) => void
}

export type FilterStore = FilterStoreState & FilterStoreActions

export const initFilterStore = (): FilterStoreState => {
    return { jobTitle: "", timePeriod: "" }
}

export const defaultInitState: FilterStoreState = {
    jobTitle: "",
    timePeriod: "",
}

export const createFilterStore = (
    initState: FilterStoreState = defaultInitState,
) => {
    return createStore<FilterStore>()((set) => ({
        ...initState,
        setJobTitle: (jobTitle: string) => set({ jobTitle }),
        setTimePeriod: (timePeriod: string) => set({ timePeriod }),
    }))
}
