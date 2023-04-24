// Dependencies
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet-async'

// Types
import { RootState } from '../../../redux/store'

// Components
import RecipeHero from '../../../components/mobile/RecipeHero'
import Recipe from '../../../components/mobile/Recipe'

// Styles
// import styles from './Recipes.module.css'

function Recipes() {
    const { id } = useParams()
    const recipes = useSelector((state: RootState) => state.recipes.value)
    const recipe = recipes.filter(recipe => recipe.id === id)[0]

    return (
        <>
            <Helmet>
                <title>{ recipe.title } - Kitchefs</title>
                <meta name='description' content='Welcome to the home of Kitchefs, the ultimate recipe cookbook.' />
            </Helmet>

            <RecipeHero recipe={ recipe } />
            <Recipe recipe={ recipe } />
        </>
    )
}

export default Recipes