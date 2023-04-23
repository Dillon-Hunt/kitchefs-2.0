import styles from './SearchBar.module.css'

function SearchBar() {
    return (
      <div className={ styles.SearchBar }>
        <input className={ styles.SearchBar__input } placeholder='Search...' />
      </div>
    )
}

export default SearchBar