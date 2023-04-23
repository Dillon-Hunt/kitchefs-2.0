// Dependencies
import { Helmet } from 'react-helmet-async'

// Component
import Welcome from '../../../components/mobile/Welcome'
import SearchBar from '../../../components/mobile/SearchBar'
import Gallery from '../../../components/mobile/Gallery/Gallery'

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
        <Gallery title={ 'Best Chocolate Recipes' } tag={ 'Chocolate' } />
        <Gallery title={ 'Awesome Vegetarian Recipes' } tag={ 'Vegetarian' } />
      </div>
    )
}

export default Home