// Components
import { useSelector } from 'react-redux'
import RecipeCard from '../RecipeCard'

// Types
import { RootState } from '../../../redux/store'

// Style
import styles from './Gallery.module.css'

interface GalleryProps {
  title: string
  tag: string
}


function Gallery(props: GalleryProps) {
  const recipes = useSelector((state: RootState) => state.recipes.value)

  return (
    <div className={ styles.Gallery }>
      <h1 className={ styles.Gallery__title }>{props.title}</h1>
      <div className={ styles.Gallery__carousel }>
          <div className={ styles.Gallery__carousel__inner }>
            {
              recipes.filter(recipe => recipe.tag === props.tag).map(recipe => {
                return <RecipeCard id={ recipe.id } title={ recipe.title } image={ recipe.image } tag={ recipe.tag } />
              })
            }
          </div>
      </div>
    </div>
  )
}

export default Gallery