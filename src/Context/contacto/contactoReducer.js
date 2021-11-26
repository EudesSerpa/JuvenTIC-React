import {
	OBTENER_CONTACTO,
	AGREGAR_CONTACTO,
	ELIMINAR_CONTACTO
} from '../../types'

export default (state, action)=>{
	switch(action.type){

		case AGREGAR_CONTACTO:
			return{
				...state,
				contacto: action.payload
			}

		case OBTENER_CONTACTO:
			return{
				...state,
				contactos: action.payload
			}
		
		case ELIMINAR_CONTACTO:
			return{
				...state,
				contactos: state.contactos.filter(contacto=> contacto._id!==
				action.payload)
			}

		default:
			return state;
	}
}