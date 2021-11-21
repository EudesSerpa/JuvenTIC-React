import React, {useReducer} from 'react'

import CarritoReducer from './CarritoReducer'
import CarritoContext from './CarritoContext'

const CarritoState = (props) => {

    const inicialState = {
        comprasCarrito: []
    }

    const [state, dispatch] = useReducer(CarritoReducer, inicialState)

    const eliminar = (id) => {
        dispatch({
            type: 'ELIMINAR_CARRITO',
            payload: id
        })
    }

    const add = (newCompra) => {
        dispatch({
            type: 'AGREGAR_CARRITO',
            payload: newCompra
        })
    }

    const vaciar = () => {
        dispatch({
            type: 'VACIAR_CARRITO',
            payload: []
        })
    }

    const actualizar = (compraActualizar) => {
        dispatch({
            type: 'ACTULIZAR_CARRITO',
            payload: compraActualizar
        })
    }

    return (
        <CarritoContext.Provider value={{
            compras: state.comprasCarrito,
            eliminar,
            add,
            vaciar,
            actualizar
        }}>
            {props.children}
        </CarritoContext.Provider>
    )
    
}

export default CarritoState