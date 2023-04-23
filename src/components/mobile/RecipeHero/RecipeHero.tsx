// Styles
import styles from './RecipeHero.module.css'

// Types
import { recipe as recipeType } from '../../../redux/types/recipe'

interface RecipeHeroProps {
    recipe: recipeType
}

function RecipeHero(props: RecipeHeroProps) {
    const { recipe } = props

    console.log(recipe.image)

    return (
        <div className={ styles.RecipeHero } style={{ backgroundImage: `url('${ recipe.image}')` }} />
    )
}

export default RecipeHero