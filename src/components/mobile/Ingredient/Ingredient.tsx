// Styles
import styles from './Ingredient.module.css'

// Types
import { ingredient } from '../../../redux/types/recipe'

interface IngredientProps {
    ingredient: ingredient,
    adjustment: number
}


function decimal_places(number: number): number {
    const match = ('' + number).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)
    if (!match) { return 0 }
    return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0))
}


function format_fraction(quantity: number) {
    const gcd = (a: number, b: number): number => {
        return b > 0.000001 ? gcd(b, a % b) : a
    }

    const number = Math.floor(quantity)
    const numerator = Math.pow(10, decimal_places(quantity)) * quantity
    const denominator = Math.pow(10, decimal_places(quantity))
    const divisor = gcd(numerator, denominator)

    return {
        number: number,
        numerator: (numerator / divisor) - number * (denominator / divisor),
        denominator: denominator / divisor
    }
}

function format_quantity(ingredient: ingredient, adjustment: number) {

    if (ingredient.unit === 'g' || ingredient.unit === 'ml') {
        if (ingredient.quantity * adjustment > 100) {
            return <>{ Math.round(ingredient.quantity * adjustment / 5) * 5 }</>
        } else {
            return <>{ Math.round(ingredient.quantity * adjustment) }</>
        }
    }
    let quantity = {
        number: 0,
        numerator: 0,
        denominator: 0
    }

    if (ingredient.quantity * adjustment > 100) {
        quantity.number = Math.round(ingredient.quantity * adjustment / 5) * 5
    } else if (ingredient.quantity * adjustment > 10) {
        quantity.number = Math.round(ingredient.quantity * adjustment)
    } else {
        quantity = format_fraction(Math.round(ingredient.quantity * adjustment * 4) / 4)
    }

    if (quantity.number === 0 && quantity.numerator === 0) {
        quantity = {
            number: 0,
            numerator: 1,
            denominator: 4
        }
    }

    return <>{ quantity.number !== 0 && quantity.number }{ quantity.numerator !== 0 && quantity.denominator !== 1 && <span dangerouslySetInnerHTML={{ __html: `&frac${ quantity.numerator }${ quantity.denominator };` }} /> }</>
}

function Ingredient(props: IngredientProps) {
    const { ingredient, adjustment } = props

    return (
        <div className={ styles.Ingredient }>
            <p className={ styles.Ingredient__name }>{ ingredient.name }</p>
            <p className={ styles.Ingredient__quantity }>{ format_quantity(ingredient, adjustment) }{ ingredient.unit === '' ? `` : ` ${ ingredient.unit }` }</p>
        </div>
    )
}

export default Ingredient