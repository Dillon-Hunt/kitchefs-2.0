// Dependencies
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

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
            <div className={ styles.Recipe__description }>
                <p className={ styles.Recipe__description__content }>{ recipe.description }</p>
                <h3>- <Link to={ '/users/Dillon_Hunt' } className={ styles.Recipe__user }>Dillon Hunt</Link></h3>
            </div>

            <div className={ styles.spacer } />

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

            <div className={ styles.spacer } />

            <h2 className={ styles.Recipe__section }>Instructions</h2>
            <div className={ styles.Recipe__instructions }>
                {
                    recipe.instructions.map((instruction, id) => {
                        return <div className={ styles.Recipe__instructions__item } key={ id }><p className={ styles.Recipe__instructions__item__number }>{ id + 1 }. </p><p className={ styles.Recipe__instructions__item__content }>{ instruction }</p></div>
                    })
                }
            </div>
        </div>
    )
}

export default Recipe