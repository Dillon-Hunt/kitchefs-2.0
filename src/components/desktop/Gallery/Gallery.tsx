// Components
import RecipeCard from '../RecipeCard'

// Style
import styles from './Gallery.module.css'

interface GalleryProps {
    title: string
}

function Gallery(props: GalleryProps) {
    return (
      <div className={ styles.Gallery }>
        <h1 className={ styles.Gallery__title }>{props.title}</h1>
        <div className={ styles.Gallery__carousel }>
            <div className={ styles.Gallery__carousel__inner }>
                <RecipeCard id={ 'chocolate-chip-cookies-937192' } title={ 'Chocolate Chip Cookies' } tag={ 'Chocolate' } image={ 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.modernhoney.com%2Fwp-content%2Fuploads%2F2017%2F11%2FThin-and-Crispy-Chocolate-Chip-Cookies-2.jpg&f=1&nofb=1&ipt=4d19369251968dd0acd85a15928935cdc6919773c40a9c56fc1ba55978cd7808&ipo=images' } />
                <RecipeCard id={ 'chocolate-mud-cake-393749' } title={ 'Chocolate Mud Cake' } tag={ 'Chocolate' } image={ 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2316%2F9835%2Fproducts%2FMud_abc06758-d6f4-4833-aaf5-ebde69640e6b.jpg%3Fv%3D1509948538&f=1&nofb=1&ipt=208929f9b913a2e4c0c3c9170705c11d51206ea22c5566987caced0da6c03f9d&ipo=images' } />
                <RecipeCard id={ 'best-ever-brownies-384927' } title={ 'Best Ever Brownies' } tag={ 'Chocolate' } image={ 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnatashaskitchen.com%2Fwp-content%2Fuploads%2F2020%2F08%2FChocolate-Brownie-Recipe-5-728x1092.jpg&f=1&nofb=1&ipt=dc0f864a34ec34274e2f96cc54192106c0c0992de286b5ea9a9682b83488abcd&ipo=images' } />
                <RecipeCard id={ 'chocolate-chip-cookies-937192' } title={ 'Chocolate Chip Cookies' } tag={ 'Chocolate' } image={ 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.modernhoney.com%2Fwp-content%2Fuploads%2F2017%2F11%2FThin-and-Crispy-Chocolate-Chip-Cookies-2.jpg&f=1&nofb=1&ipt=4d19369251968dd0acd85a15928935cdc6919773c40a9c56fc1ba55978cd7808&ipo=images' } />
                <RecipeCard id={ 'chocolate-mud-cake-393749' } title={ 'Chocolate Mud Cake' } tag={ 'Chocolate' } image={ 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2316%2F9835%2Fproducts%2FMud_abc06758-d6f4-4833-aaf5-ebde69640e6b.jpg%3Fv%3D1509948538&f=1&nofb=1&ipt=208929f9b913a2e4c0c3c9170705c11d51206ea22c5566987caced0da6c03f9d&ipo=images' } />
                <RecipeCard id={ 'best-ever-brownies-384927' } title={ 'Best Ever Brownies' } tag={ 'Chocolate' } image={ 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnatashaskitchen.com%2Fwp-content%2Fuploads%2F2020%2F08%2FChocolate-Brownie-Recipe-5-728x1092.jpg&f=1&nofb=1&ipt=dc0f864a34ec34274e2f96cc54192106c0c0992de286b5ea9a9682b83488abcd&ipo=images' } />
            </div>
        </div>
      </div>
    )
}

export default Gallery