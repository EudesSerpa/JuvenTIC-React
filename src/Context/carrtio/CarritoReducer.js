import {
    ELIMINAR_CARRITO,
    AGREGAR_CARRITO,
    ACTULIZAR_CARRITO,
    VACIAR_CARRITO
} from '../../types'

export default (state, action) => {
    const {payload, type} = action

    switch(type){
        case AGREGAR_CARRITO:
            return {
                ...state,
                comprasCarrito: [...state.comprasCarrito, payload]
            }
        case ELIMINAR_CARRITO:
            return {
                ...state,
                comprasCarrito: state.comprasCarrito.filter( compra => compra.id !== payload)
            }
        case VACIAR_CARRITO:
            return {
                ...state,
                comprasCarrito: payload
            }
        case ACTULIZAR_CARRITO:
            return {
                ...state,
                comprasCarrito: state.comprasCarrito.map( compra => {
                    if(compra.id == payload.id){
                        return payload
                    }
                    else{
                        return compra
                    }
                })      
            }
        default:
            return state;
    }

}