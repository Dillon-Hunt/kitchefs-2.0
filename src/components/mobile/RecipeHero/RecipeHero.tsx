// Dependencies
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

// Styles
import styles from './RecipeHero.module.css'

// Types
import { recipe as recipeType } from '../../../redux/types/recipe'

interface RecipeHeroProps {
    recipe: recipeType
}

function RecipeHero(props: RecipeHeroProps) {
    const { recipe } = props

    return (
        <div className={ styles.RecipeHero } style={{ backgroundImage: `url('${ recipe.image}')` }}>
            <Link to='/' className={ styles.RecipeHero__back }><FontAwesomeIcon icon={ icon({ name: 'chevron-left' }) } className={ styles.RecipeHero__back__icon } size='lg' /></Link>
            <h1 className={ styles.RecipeHero__title }>{ recipe.title }</h1>
            <h3 className={ styles.RecipeHero__subtitle }>Makes: 12 | Prep: 30m | Cook: 10m</h3>
        </div>
    )
}

export default RecipeHero