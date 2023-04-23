// Style
import { Link } from 'react-router-dom'
import styles from './RecipeCard.module.css'

interface RecipeCardProps {
  id: string,
  title: string,
  image: string,
  tag: string
}

function RecipeCard(props: RecipeCardProps) {
    return (
      <Link className={ styles.RecipeCard } to={ `/recipes/${props.id}` }>
        <div className={ styles.RecipeCard__image} style={{ backgroundImage: `url('${ props.image }')` }} >
            <div className={ styles.RecipeCard__image__tag }>{ props.tag }</div>
            
            <div className={ styles.RecipeCard__image__overlay }>
                <h2 className={ styles.RecipeCard__image__overlay__title }>{ props.title }</h2>
                <p className={ styles.RecipeCard__image__overlay__details }>Makes: 12 | Time: 45m</p>
            </div>
        </div>
      </Link>
    )
}

export default RecipeCard