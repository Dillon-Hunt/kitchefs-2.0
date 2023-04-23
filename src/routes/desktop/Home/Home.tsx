// Dependencies
import { Helmet } from 'react-helmet-async'

// Component
import Welcome from '../../../components/desktop/Welcome'
import SearchBar from '../../../components/desktop/SearchBar'
import Gallery from '../../../components/desktop/Gallery/Gallery'

// Styles
import styles from './Home.module.css'

function Home() {
    return (
      <div className={ styles.Home }>
        <Helmet>
            <title>Recipes - Kitchefs</title>
            <meta name='description' content='Welcome to the home of Kitchefs, the ultimate recipe cookbook.' />
        </Helmet>

        <Welcome />
        <SearchBar />
        <Gallery title='Best Chocolate Recipes' />
        <Gallery title='Best Chocolate Recipes' />
      </div>
    )
}

export default Home