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
				platos: action.payload
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
						plato.nombre = action.payload.nombre;
						plato.descripcion = action.payload.descripcion;
						plato.precio = action.payload.precio;
						plato.imgURL = action.payload.imgURL;
						plato.public_id = action.payload.public_id;
					}
				})
			}
		default:
			return state;
	}
}