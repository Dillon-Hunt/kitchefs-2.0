// Components
import Ingredient from '../Ingredient/Ingredient'

// Styles
import styles from './Recipe.module.css'

// Types
import { recipe } from '../../../redux/types/recipe'

interface RecipeProps {
    recipe: recipe
}

function Recipe(props: RecipeProps) {
    const { recipe } = props

    return (
        <div className={ styles.Recipe }>
            <h1 className={ styles.Recipe__title }>{ recipe.title }</h1>
            <h3 className={ styles.Recipe__subtitle }>Makes: 12 | Prep: 30m | Cook: 10m</h3>

            <h2 className={ styles.Recipe__section }>Ingredients</h2>
            <div className={ styles.Recipe__ingredients }>
                {
                    recipe.ingredients.map(ingredient => {
                        return <Ingredient ingredient={ ingredient } />
                    })
                }
            </div>

            <h2 className={ styles.Recipe__section }>Instructions</h2>
            <ul>
                {
                    recipe.instructions.map(instruction => {
                        return <li>{ instruction }</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Recipe