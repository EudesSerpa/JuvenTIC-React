import {
	CREAR_COMENTARIOS,
	OBTENER_COMENTARIOS,
	EDITAR_COMENTARIOS,
	BORRAR_COMENTARIOS
} from '../../types'

export default (state, action)=>{
	switch(action.type){

		case CREAR_COMENTARIOS:
			return{
				...state,
				comentario: action.payload
			}

		case OBTENER_COMENTARIOS:
			return{
				...state,
				comentarios: action.payload
			}
		
		case BORRAR_COMENTARIOS:
			return{
				...state,
				comentarios: state.comentarios.filter(comentario=> comentario._id!==
				action.payload)
			}

		case EDITAR_COMENTARIOS:
			return{
				...state,
				comentarios: state.comentarios.map(comentario=>{
					if(comentario._id === action.payload._id){
						comentario.texto = action.payload.texto
					}
				})
			}
		default:
			return state;
	}
}