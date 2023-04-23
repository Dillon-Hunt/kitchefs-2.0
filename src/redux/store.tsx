// Dependencies
import { configureStore } from '@reduxjs/toolkit'

// Slices
import recipesReducer from './slices/recipes'

export const store =  configureStore({
    reducer: {
        recipes: recipesReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch