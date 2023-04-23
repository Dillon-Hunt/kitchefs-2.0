// Dependencies
import { Outlet } from 'react-router-dom'

// Components
import Navigation from '../../../components/desktop/Navigation'

// Styles
// import styles from './DesktopLayout.module.css'

function DesktopLayout() {
    return (
      <>
        <Navigation />
        <Outlet />
      </>
    )
}

export default DesktopLayout