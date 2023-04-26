// Dependencies
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setRecipes } from '../../../redux/slices/recipes'

// Component
import Welcome from '../../../components/mobile/Welcome'
import SearchBar from '../../../components/mobile/SearchBar'
import Gallery from '../../../components/mobile/Gallery/Gallery'

// Styles
import styles from './Home.module.css'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    const BASE_URL = process.env.REACT_APP_BASE_URL

    fetch(`http://${BASE_URL}/recipes`)
      .then(response => response.json())
      .then(data => data.error === null && dispatch(setRecipes(data.response)))
  }, [dispatch])

  return (
    <div className={ styles.Home }>
      <Helmet>
          <title>Recipes - Kitchefs</title>
          <meta name='description' content='Welcome to the home of Kitchefs, the ultimate recipe cookbook.' />
      </Helmet>

      <Welcome />
      <SearchBar />
      <Gallery title={ 'Best Chocolate Recipes' } tag={ 'Chocolate' } />
      <Gallery title={ 'Tasty Baking Recipes' } tag={ 'Baking' } />
      <Gallery title={ 'Awesome Vegetarian Recipes' } tag={ 'Vegetarian' } />
    </div>
  )
}

export default Home