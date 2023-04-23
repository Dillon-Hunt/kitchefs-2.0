// Styles
import styles from './Welcome.module.css';

function Welcome() {
    return (
      <div className={ styles.Welcome }>
        <div className={ styles.Welcome__greeting }>
            <h1 className={ styles.Welcome__greeting__title }>Hello Dillon,</h1>
            <p className={ styles.Welcome__greeting__subtitle }>What would you like to cook?</p>
        </div>
        <div className={ styles.Welcome__profile }>
        </div>
      </div>
    )
}

export default Welcome