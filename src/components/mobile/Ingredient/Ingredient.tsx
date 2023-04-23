// Styles
import styles from './Ingredient.module.css'

// Types
import { ingredient } from '../../../redux/types/recipe'

interface IngredientProps {
    ingredient: ingredient
}

function Ingredient(props: IngredientProps) {
    const { ingredient } = props

    return (
        <div className={ styles.Ingredient }>
            <p className={ styles.Ingredient__name }>{ ingredient.name }</p>
            <p className={ styles.Ingredient__quantity }>{ ingredient.quantity }{ ingredient.unit }</p>
        </div>
    )
}

export default Ingredient