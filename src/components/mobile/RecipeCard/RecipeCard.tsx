// Style
import { Link } from 'react-router-dom'
import styles from './RecipeCard.module.css'

// Types
import { recipe as recipeType } from '../../../redux/types/recipe'

interface RecipeCardProps {
    recipe: recipeType
}


function RecipeCard(props: RecipeCardProps) {
  const { recipe } = props

  return (
    <Link className={ styles.RecipeCard } to={ `/recipes/${ recipe.url }` }>
      <div className={ styles.RecipeCard__image} style={{ backgroundImage: `url('${ recipe.image }')` }} >
          <div className={ styles.RecipeCard__image__tag }>{ recipe.category }</div>
          
          <div className={ styles.RecipeCard__image__overlay }>
              <h2 className={ styles.RecipeCard__image__overlay__title }>{ recipe.title }</h2>
              <p className={ styles.RecipeCard__image__overlay__details }>Makes: 12 | Time: 45m</p>
          </div>
      </div>
    </Link>
  )
}

export default RecipeCard