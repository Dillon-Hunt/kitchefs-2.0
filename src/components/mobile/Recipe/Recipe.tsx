// Dependencies
import { useSelector } from 'react-redux'

// Components
import Ingredient from '../Ingredient'
import Servings from '../Servings'

// Styles
import styles from './Recipe.module.css'

// Types
import { RootState } from '../../../redux/store'
import { recipe } from '../../../redux/types/recipe'

interface RecipeProps {
    recipe: recipe
}

function Recipe(props: RecipeProps) {
    const { recipe } = props

    const servings = useSelector((state: RootState) => state.servings.value)

    return (
        <div className={ styles.Recipe }>
            <h1 className={ styles.Recipe__title }>{ recipe.title }</h1>
            <h3 className={ styles.Recipe__subtitle }>Makes: 12 | Prep: 30m | Cook: 10m</h3>

            <div className={ styles.Recipe__section__ingredients}>
                <h2 className={ styles.Recipe__section }>Ingredients</h2>
                <Servings servings={ recipe.servings } />
            </div>
            <div className={ styles.Recipe__ingredients }>
                {
                    recipe.ingredients.map((ingredient, id) => {
                        return <Ingredient key={ id } ingredient={ ingredient } adjustment={servings / recipe.servings} />
                    })
                }
            </div>

            <h2 className={ styles.Recipe__section }>Instructions</h2>
            <ol>
                {
                    recipe.instructions.map((instruction, id) => {
                        return <li key={ id }>{ instruction }</li>
                    })
                }
            </ol>
        </div>
    )
}

export default Recipe