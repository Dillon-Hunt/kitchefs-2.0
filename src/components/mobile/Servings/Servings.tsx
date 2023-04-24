// Dependencies
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setServings, incrementServings, decrementServings } from '../../../redux/slices/servings'

// Styles
import styles from './Servings.module.css'

// Types
import { RootState } from '../../../redux/store'

interface ServingsProps {
    servings: number
}

function Servings(props: ServingsProps) {
    const { servings } = props

    const dispatch = useDispatch()
    const count = useSelector((state: RootState) => state.servings.value)

    const handleInput = (e: any) => {
        dispatch(setServings(parseInt(e.target.value)))
    }

    useEffect(() => {
        dispatch(setServings(servings))
    }, [dispatch, servings])

    return (
        <div className={ styles.Servings }>
            <button className={ styles.Servings__button } onClick={() => dispatch(decrementServings())}>-</button>
            <input className={ styles.Servings__count } onChange={(e) => handleInput(e)} value={ count } max={ 999 } min={ 1 } />
            <button className={ styles.Servings__button } onClick={() => dispatch(incrementServings())}>+</button>
        </div>
    )
}

export default Servings