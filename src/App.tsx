// Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useState, useEffect } from 'react'

// Routes
import DesktopHome from './routes/desktop/Home'
import DesktopSearch from './routes/desktop/Search'
import DesktopNotFound from './routes/desktop/NotFound'

import MobileHome from './routes/mobile/Home'
import MobileSearch from './routes/mobile/Search'
import MobileSubmitRecipe from './routes/mobile/SubmitRecipe'
import MobileRecipes from './routes/mobile/Recipes'
import MobileNotFound from './routes/mobile/NotFound'

// Other
import DesktopLayout from './other/desktop/Layout'
import MobileLayout from './other/mobile/Layout'

// Styles
import styles from './App.module.css'

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 620

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  return (
    <div className={ styles.container }>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            {
              width > breakpoint 
              ?
              <Route path='/' element={<DesktopLayout />}>
                <Route index element={<DesktopHome />} />
                <Route path='search' element={<DesktopSearch />} />
                <Route path='*' element={<DesktopNotFound />} />
              </Route>
              :
              <Route path='/' element={<MobileLayout />}>
                <Route index element={<MobileHome />} />
                <Route path='search' element={<MobileSearch />} />
                <Route path='submit' element={<MobileSubmitRecipe />} />
                <Route path='recipes/:id' element={<MobileRecipes />} />
                <Route path='*' element={<MobileNotFound />} />
              </Route>
            }
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  )
}

export default App
