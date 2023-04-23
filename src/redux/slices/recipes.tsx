import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface recipe {
    id: string,
    title: string,
    image: string,
    tag: string
}

interface recipesState {
    value: recipe[]
}

const initialState: recipesState = {
    value: [
        {
            id: 'chocolate-chip-cookies-937192',
            title: 'Chocolate Chip Cookies',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.modernhoney.com%2Fwp-content%2Fuploads%2F2017%2F11%2FThin-and-Crispy-Chocolate-Chip-Cookies-2.jpg&f=1&nofb=1&ipt=4d19369251968dd0acd85a15928935cdc6919773c40a9c56fc1ba55978cd7808&ipo=images',
            tag: 'Chocolate'
        },
        {
            id: 'chocolate-mud-cake-393749',
            title: 'Chocolate Mud Cake',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2316%2F9835%2Fproducts%2FMud_abc06758-d6f4-4833-aaf5-ebde69640e6b.jpg%3Fv%3D1509948538&f=1&nofb=1&ipt=208929f9b913a2e4c0c3c9170705c11d51206ea22c5566987caced0da6c03f9d&ipo=images',
            tag: 'Chocolate'
        },
        {
            id: 'best-ever-brownies-384927',
            title: 'Best Ever Brownies',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnatashaskitchen.com%2Fwp-content%2Fuploads%2F2020%2F08%2FChocolate-Brownie-Recipe-5-728x1092.jpg&f=1&nofb=1&ipt=dc0f864a34ec34274e2f96cc54192106c0c0992de286b5ea9a9682b83488abcd&ipo=images',
            tag: 'Chocolate'
        },
        {
            id: 'vegetarian-open-sushi-395024',
            title: 'Vegetarian Open Sushi',
            image: 'https://img.taste.com.au/AXhc7szL/w720-h480-cfill-q80/taste/2018/11/vegetarian-open-sushi-144519-1.jpg',
            tag: 'Vegetarian'
        },
        {
            id: 'slow-cooker-creamy-vegetarian-bake-150739',
            title: 'Slow Cooker Creamy Vegetarian Bake',
            image: 'https://img.taste.com.au/t7Fgb5Wr/w720-h480-cfill-q80/taste/2019/06/slow-cooker-creamy-vegetarian-bake-150739-2.jpg',
            tag: 'Vegetarian'
        },
        {
            id: 'mexican-vegetarian-tray-bake-346264',
            title: 'Mexican Vegetarian Tray Bake',
            image: 'https://img.taste.com.au/VsktcYYw/w720-h480-cfill-q80/taste/2022/06/mexican-style-tray-bake-02-179128-3.jpg',
            tag: 'Vegetarian'
        }   
    ]
}

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addRecipe: (state, action: PayloadAction<recipe>) => {
            state.value.push(action.payload)
        }
    }
})

export const { addRecipe } = recipesSlice.actions
export const selectRecipes = (state: { recipe: recipesState }) => state.recipe.value

export default recipesSlice.reducer