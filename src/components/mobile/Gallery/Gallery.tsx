// Components
import { useSelector } from 'react-redux'
import RecipeCard from '../RecipeCard'

// Style
import styles from './Gallery.module.css'

// Types
import { RootState } from '../../../redux/store'

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
              return <RecipeCard recipe={ recipe } />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Gallery