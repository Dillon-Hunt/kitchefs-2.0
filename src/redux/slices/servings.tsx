// Dependencies
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Types
interface servingsState {
    value: number
}

const initialState: servingsState = {
    value: 0
}

export const servingsSlice = createSlice({
    name: 'servings',
    initialState,
    reducers: {
        setServings: (state, action: PayloadAction<number>) => {
            state.value = action.payload > 1 ? action.payload : 1
        },
        incrementServings: (state) => {
            state.value += 1
        },
        decrementServings: (state) => {
            if (state.value > 1) state.value -= 1
        },
    }
})

export const { setServings, incrementServings, decrementServings } = servingsSlice.actions
export const selectRecipes = (state: { recipe: servingsState }) => state.recipe.value
export default servingsSlice.reducer