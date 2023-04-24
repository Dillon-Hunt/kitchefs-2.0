// Dependencies
import { Helmet } from 'react-helmet-async'

// Styles
import styles from './NotFound.module.css'

function NotFound() {
    return (
      <div className={ styles.NotFound }>
        <Helmet>
            <title>404 - Page Not Found</title>
            <meta name='description' content='Something went wrong...' />
        </Helmet>
        
        <h1 className={ styles.NotFound__Title }>404</h1>
        <p className={ styles.NotFound__Subtitle }>Page Not Found</p>
      </div>
    )
}

export default NotFound