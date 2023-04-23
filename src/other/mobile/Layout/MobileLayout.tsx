// Dependencies
import { Outlet } from 'react-router-dom'

// Components
import Navigation from '../../../components/mobile/Navigation'

// Styles
// import styles from './MobileLayout.module.css'

function MobileLayout() {
    return (
      <>
        <Outlet />
        <Navigation />
      </>
    )
}

export default MobileLayout