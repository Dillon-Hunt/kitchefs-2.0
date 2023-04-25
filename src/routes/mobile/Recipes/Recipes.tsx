// Dependencies
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

// Types
import { recipe } from '../../../redux/types/recipe'

// Components
import RecipeHero from '../../../components/mobile/RecipeHero'
import Recipe from '../../../components/mobile/Recipe'

// Styles
import styles from './Recipes.module.css'

function Recipes() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState<recipe | null>(null)

    useEffect(() => {
        const BASE_URL = process.env.REACT_APP_BASE_URL

        fetch(`http://${BASE_URL}/recipes/${id}`)
            .then(response => response.json())
            .then(data => data.error === null && setRecipe(data.response))
    }, [id, setRecipe])

    return (
        <>

            {
                recipe !== null ?
                <>
                    <Helmet>
                        <title>{ recipe.title } - Kitchefs</title>
                        <meta name='description' content='Welcome to the home of Kitchefs, the ultimate recipe cookbook.' />
                    </Helmet>

                    <RecipeHero recipe={ recipe } />
                    <Recipe recipe={ recipe } />
                </> : <div className={ styles.container }>
                    <div className={ styles.RecipeHero__placeholder } />
                    <div className={ styles.Recipe__placeholder }>
                        <div className={ styles.Recipe__placeholder__description } />
                        <div className={ styles.Recipe__placeholder__section } />
                        <div className={ styles.Recipe__placeholder__ingredient } />
                        <div className={ styles.Recipe__placeholder__ingredient } />
                        <div className={ styles.Recipe__placeholder__ingredient } />
                        <div className={ styles.Recipe__placeholder__ingredient } />
                    </div>
                </div>
            }
        </>
    )
}

export default Recipes