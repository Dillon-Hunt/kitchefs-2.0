// Dependencies
import { configureStore } from '@reduxjs/toolkit'

// Slices
import recipesReducer from './slices/recipes'
import servingsReducer from './slices/servings'

export const store =  configureStore({
    reducer: {
        recipes: recipesReducer,
        servings: servingsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch