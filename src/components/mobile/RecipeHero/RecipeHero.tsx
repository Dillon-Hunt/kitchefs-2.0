// Styles
import styles from './RecipeHero.module.css'

function RecipeHero() {
    return (
        <div className={ styles.RecipeHero } style={{ backgroundImage: './' }}>
            <h1>Recipe Name</h1>
        </div>
    )
}

export default RecipeHero