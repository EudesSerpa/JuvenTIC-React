import {
    ELIMINAR_SERVICIO,
    AGREGAR_SERVICIO,
    ACTULIZAR_SERVICIO,
    OBTENER_SERVICIO
} from '../../types'

export default (state, action) => {
    const {payload, type} = action

    switch(type){
        case AGREGAR_SERVICIO:
            return {
                ...state,
                serviciosList: [...state.serviciosList, payload]
            }
        case ELIMINAR_SERVICIO:
            return {
                ...state,
                serviciosList: state.serviciosList.filter( compra => compra.id !== payload)
            }
        case OBTENER_SERVICIO:
            return {
                ...state,
                serviciosList: payload
            }
        case ACTULIZAR_SERVICIO:
            return {
                ...state,
                serviciosList: state.serviciosList.map( compra => {
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