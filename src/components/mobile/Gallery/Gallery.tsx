// Dependencies
import { useSelector } from 'react-redux'

// Components
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
  const { title, tag } = props
  const recipes = useSelector((state: RootState) => state.recipes.value)

  return (
    <div className={ styles.Gallery }>
      <h1 className={ styles.Gallery__title }>{ title }</h1>
      <div className={ styles.Gallery__carousel }>
        <div className={ styles.Gallery__carousel__inner }>
          {
            recipes.length !== 0 
            ? 
            recipes.filter(recipe => recipe.tag === tag).map((recipe, id) => {
              return <RecipeCard key={ id } recipe={ recipe } />
            })
            :
            <>
              <div className={ styles.RecipeCard__placeholder } />
              <div className={ styles.RecipeCard__placeholder } />
              <div className={ styles.RecipeCard__placeholder } />
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Gallery