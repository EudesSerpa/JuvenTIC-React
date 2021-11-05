 import {
	CREAR_PLATOS,
	OBTENER_PLATOS,
	EDITAR_PLATOS,
	BORRAR_PLATOS
} from '../../types'

export default (state, action)=>{
	switch(action.type){

		case CREAR_PLATOS:
			return{
				...state,
				plato: action.payload
			}

		case OBTENER_PLATOS:
			return{
				...state,
				paltos: action.payload
			}
		
		case BORRAR_PLATOS:
			return{
				...state,
				platos: state.platos.filter(plato=> plato._id!==
				action.payload)
			}

		case EDITAR_PLATOS:
			return{
				...state,
				platos: state.platos.map(plato=>{
					if(plato._id === action.payload._id){
						
					}
				})
			}
		default:
			return state;
	}
}