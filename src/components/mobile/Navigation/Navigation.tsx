// Dependencies
import { Link } from 'react-router-dom'

// Styles
import styles from './Navigation.module.css'

function Navigation() {
  return (
    <nav className={ styles.Navigation }>
        <div className={ styles.Navigation__item }>
            <Link to='/404'>404</Link>
        </div>
        <div className={ styles.Navigation__item }>
            <Link to='/'>Home</Link>
        </div>
        <div className={ styles.Navigation__item }>
            <Link to='/'>Placeholder</Link>
        </div>
    </nav>
  )
}



export default Navigation