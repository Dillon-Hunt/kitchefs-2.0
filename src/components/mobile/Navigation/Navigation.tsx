// Dependencies
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

// Styles
import styles from './Navigation.module.css'

function Navigation() {
  return (
    <nav className={ styles.Navigation }>
      <div className={ styles.Navigation__item }>
        <Link to='/'><FontAwesomeIcon icon={ icon({ name: 'add' }) } /></Link>
      </div>
      <div className={ styles.Navigation__item }>
        <Link to='/'><FontAwesomeIcon icon={ icon({ name: 'home' }) } /></Link>
      </div>
      <div className={ styles.Navigation__item }>
        <Link to='/'><FontAwesomeIcon icon={ icon({ name: 'gear' }) } /></Link>
      </div>
    </nav>
  )
}



export default Navigation