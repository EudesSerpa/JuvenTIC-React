import {
	AGREGAR_RCOMPRA,
	OBTENER_RCOMPRA,
	ELIMINAR_RCOMPRA
} from '../../types'

export default (state, action)=>{
	switch(action.type){

		case AGREGAR_RCOMPRA:
			return{
				...state,
				compra: action.payload
			}

		case OBTENER_RCOMPRA:
			return{
				...state,
				compras: action.payload
			}
				
		case ELIMINAR_RCOMPRA:
			return{
				...state,
				compras: state.compras.filter(compra=> compra._id!==
				action.payload)
			}

		default:
			return state;
	}
}