// Dependencies
import { useState, SyntheticEvent } from 'react'

// Styles
import { Helmet } from 'react-helmet-async'
import styles from './SubmitRecipe.module.css'

// Types
interface ingredient {
    name: string,
    amount: string
}

interface new_recipe {
    title: string,
    description: string,
    image: string,
    tags: string[],
    category: string,
    cook_time: number | null,
    prep_time: number | null,
    servings: number | null,
    ingredients: ingredient[],
    instructions: string[]
}

type items = 'title' | 'description' | 'image' | 'tags' | 'category' | 'cook_time' | 'prep_time' | 'servings' | 'ingredients' | 'instructions'
type subitems = 'name' | 'amount' | null

// TODO: Reduce function length / simplify
function convert_fraction_to_decimal(fraction_string: string) {
    if (!fraction_string) return 0
  
    const fraction_parts = fraction_string.split(' ')
    let whole = 0
    let numerator = 0
    let denominator = 1
  
    if (fraction_parts.length === 2) {
        whole = parseInt(fraction_parts[0])
        fraction_string = fraction_parts[1]
    }
  
    if (fraction_string.includes('/')) {
        numerator = parseInt(fraction_string.split('/')[0])
        denominator = parseInt(fraction_string.split('/')[1])
    } else {
        whole = parseInt(fraction_string)
    }
  
    const decimal = whole + (numerator / denominator)
    return decimal
}


function SubmitRecipe() {
    const [recipe, setRecipe] = useState<new_recipe>({
        title: '',
        description: '',
        image: '',
        tags: [],
        category: '',
        cook_time: null,
        prep_time: null,
        servings: null,
        ingredients: [
            {
                name: '',
                amount: ''
            }
        ],
        instructions: [
            ''
        ]
    })

    const updateRecipe = (value: string, key: number, item: items, subitem: subitems) => {
        const new_recipe = { ...recipe }

        switch (item) {
            case 'title':
                new_recipe.title = value
                break
            case 'description':
                new_recipe.description = value
                break
            case 'image':
                new_recipe.image = value
                break
            case 'tags':
                new_recipe.tags = value.split(',')
                break
            case 'category':
                new_recipe.category = value
                break
            case 'cook_time':
                new_recipe.cook_time = parseInt(value)
                break
            case 'prep_time':
                new_recipe.prep_time = parseInt(value)
                break
            case 'servings':
                new_recipe.servings = parseInt(value)
                break
            case 'ingredients':
                subitem === 'amount' ? new_recipe.ingredients[key].amount = value : new_recipe.ingredients[key].name = value
                break
            case 'instructions':
                new_recipe.instructions[key] = value
        }

        setRecipe(new_recipe)
    }

    const addPart = (item: items) => {
        const new_recipe = { ...recipe }

        switch (item) {
            case 'ingredients':
                new_recipe.ingredients.push({
                    name: '',
                    amount: ''
                })
                break
            case 'instructions':
                new_recipe.instructions.push('')
                break
        }

        setRecipe(new_recipe)
    }


    const submit = (e: SyntheticEvent) => {
        e.preventDefault()
        
        console.log({
            url: recipe.title.toLowerCase().replace(/ /g, '-') + '-' + (Math.floor(Math.random() * 90000000) + 10000000).toString(),
            title: recipe.title,
            description: recipe.description,
            image: recipe.image,
            tags: recipe.tags,
            category: recipe.category,
            cook_time: recipe.cook_time,
            prep_time: recipe.prep_time,
            servings: recipe.servings,
            ingredients: recipe.ingredients.map(ingredient => {
                return {
                    quantity: ingredient.amount.match(/[\d\s/]+/) ? convert_fraction_to_decimal(ingredient.amount.match(/[\d\s/]+/)![0].trim()) : 0, // eval()  .trim().replaceAll(' ', '+')
                    unit: ingredient.amount.match(/cup|tsp|tbsp|g|fl oz|ml|oz/) ? ingredient.amount.match(/cup|tsp|tbsp|g|fl oz|ml|oz/)![0] : '',
                    name: ingredient.name
                }
            }),
            instructions: recipe.instructions
        })
    }

    return (
        <div className={ styles.SubmitRecipe }>
            <Helmet>
                <title>Submit Recipe - Kitchefs</title>
                <meta name='description' content='Submit your own recipe to Kitchefs.' />
            </Helmet>

            <div className={ styles.SubmitRecipe__title__container }>
                <h1 className={ styles.SubmitRecipe__title }>Submit a Recipe</h1>
                <button className={ styles.SubmitRecipe__button__import }>Import</button>
            </div>

            <form className={ styles.SubmitRecipe__form }  onSubmit={ (e) => submit(e) }>
                <h2 className={ styles.SubmitRecipe__section }>Ingredients</h2>
                <div className={ styles.SubmitRecipe__input }>

                    {
                        recipe.ingredients.map((ingredient, id) => {
                            return (
                                <div className={ styles.SubmitRecipe__input__ingredient } key={ id + 1 }>
                                    <input className={ styles.SubmitRecipe__input__ingredient__name } type='text' placeholder='E.g. Plain Flour' required value={ ingredient.name } onChange={ (e) => updateRecipe(e.target.value, id, 'ingredients', 'name') } />
                                    <input className={ styles.SubmitRecipe__input__ingredient__quantity } type='text' placeholder='E.g. 100g' value={ ingredient.amount } onChange={ (e) => updateRecipe(e.target.value, id, 'ingredients', 'amount') } />
                                </div>
                            )
                        })
                    }

                    <button className={ styles.SubmitRecipe__input__insert } type='button' onClick={ () => addPart('ingredients') }>Add Ingredient</button>
                </div>

                <h2 className={ styles.SubmitRecipe__section }>Method</h2>
                <div className={ styles.SubmitRecipe__input }>
                    
                    {
                        recipe.ingredients.map((ingredient, id) => {
                            return (
                                <div className={ styles.SubmitRecipe__input__method } key={ id }>
                                    <input className={ styles.SubmitRecipe__input__method__content } type='text' placeholder='E.g. Mix Flour, Milk and Eggs in a large...' required onChange={ (e) => updateRecipe(e.target.value, id, 'instructions', null) } />
                                </div>
                            )
                        })
                    }

                    <button className={ styles.SubmitRecipe__input__insert } type='button' onClick={ () => addPart('instructions') }>Add Step</button>
                </div>

                <div className={ styles.spacer} />

                <button className={ styles.SubmitRecipe__button__submit } type='submit'>Submit Recipe</button>
            </form>
        </div>
    )
}

export default SubmitRecipe