// Dependencies
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Types
import { recipe } from '../types/recipe'

interface recipesState {
    value: recipe[]
}

const initialState: recipesState = {
    value: [
        {
            id: 'chocolate-chip-cookies-937192',
            title: 'Chocolate Chip Cookies',
            description: 'Chocolate chip cookies are a classic afternoon tea treat made from buttery dough studded with chunks of melted chocolate. We’ve tried so many tweaks and variations over the years (with a few fails along the way) to try and nail the best chocolate chip cookie recipe, but we think we’ve finally cracked it!',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.modernhoney.com%2Fwp-content%2Fuploads%2F2017%2F11%2FThin-and-Crispy-Chocolate-Chip-Cookies-2.jpg&f=1&nofb=1&ipt=4d19369251968dd0acd85a15928935cdc6919773c40a9c56fc1ba55978cd7808&ipo=images',
            tag: 'Chocolate',
            servings: 30,
            ingredients: [
                {
                    quantity: 125,
                    unit: 'g',
                    name: 'Butter, Softened'
                },
                {
                    quantity: 110,
                    unit: 'g',
                    name: 'Caster Sugar'
                },
                {
                    quantity: 110,
                    unit: 'g',
                    name: 'Brown Sugar'
                },
                {
                    quantity: 1,
                    unit: '',
                    name: 'Egg'
                },
                {
                    quantity: 150,
                    unit: 'g',
                    name: 'Plain Flour'
                },
                {
                    quantity: 75,
                    unit: 'g',
                    name: 'Self-Raising Flour'
                },
                {
                    quantity: 25,
                    unit: 'g',
                    name: 'Cocoa Powder'
                },
                {
                    quantity: 100,
                    unit: 'g',
                    name: 'White Chocolate, Chopped'
                },
                {
                    quantity: 100,
                    unit: 'g',
                    name: 'Dark Chocolate, Chopped'
                }
            ],
            instructions: [
                'Preheat oven to 180°C. Line 2 baking trays with baking paper. Use an electric mixer to beat the butter and combined sugar in a bowl until pale and creamy.',
                'Add the egg and beat until well combined. Add the combined flour and cocoa powder. Stir until combined. Add the white chocolate and dark chocolate and stir to combine.',
                'Roll tablespoons of mixture into balls and arrange on the lined trays, allowing room for spreading. Bake, swapping trays halfway through cooking, for 12-15 mins or until golden brown. Set aside on the trays to cool.'
            ]
        },
        {
            id: 'chocolate-mud-cake-393749',
            title: 'Chocolate Mud Cake',
            description: 'This is the best chocolate mud cake recipe you will ever find. It is so easy to make and is always a crowd pleaser.',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2316%2F9835%2Fproducts%2FMud_abc06758-d6f4-4833-aaf5-ebde69640e6b.jpg%3Fv%3D1509948538&f=1&nofb=1&ipt=208929f9b913a2e4c0c3c9170705c11d51206ea22c5566987caced0da6c03f9d&ipo=images',
            tag: 'Chocolate',
            servings: 30,
            ingredients: [],
            instructions: []
        },
        {
            id: 'best-ever-brownies-384927',
            title: 'Best Ever Brownies',
            description: 'These brownies are the best brownies you will ever make. They are so easy to make and are always a crowd pleaser.',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnatashaskitchen.com%2Fwp-content%2Fuploads%2F2020%2F08%2FChocolate-Brownie-Recipe-5-728x1092.jpg&f=1&nofb=1&ipt=dc0f864a34ec34274e2f96cc54192106c0c0992de286b5ea9a9682b83488abcd&ipo=images',
            tag: 'Chocolate',
            servings: 30,
            ingredients: [],
            instructions: []
        },
        {
            id: 'vegetarian-open-sushi-395024',
            title: 'Vegetarian Open Sushi',
            description: 'This vegetarian open sushi is a great way to get the kids involved in the kitchen. It is also a great way to use up leftover rice.',
            image: 'https://img.taste.com.au/AXhc7szL/w720-h480-cfill-q80/taste/2018/11/vegetarian-open-sushi-144519-1.jpg',
            tag: 'Vegetarian',
            servings: 30,
            ingredients: [],
            instructions: []
        },
        {
            id: 'slow-cooker-creamy-vegetarian-bake-150739',
            title: 'Slow Cooker Creamy Vegetarian Bake',
            description: 'This vegetarian bake is a great way to get the kids involved in the kitchen. It is also a great way to use up leftover vegetables.',
            image: 'https://img.taste.com.au/t7Fgb5Wr/w720-h480-cfill-q80/taste/2019/06/slow-cooker-creamy-vegetarian-bake-150739-2.jpg',
            tag: 'Vegetarian',
            servings: 30,
            ingredients: [],
            instructions: []
        },
        {
            id: 'mexican-vegetarian-tray-bake-346264',
            title: 'Mexican Vegetarian Tray Bake',
            description: 'This vegetarian tray bake is a great way to get the kids involved in the kitchen. It is also a great way to use up leftover vegetables.',
            image: 'https://img.taste.com.au/VsktcYYw/w720-h480-cfill-q80/taste/2022/06/mexican-style-tray-bake-02-179128-3.jpg',
            tag: 'Vegetarian',
            servings: 30,
            ingredients: [],
            instructions: []
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