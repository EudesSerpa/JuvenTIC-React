import {
	AGREGAR_RESERVA,
	OBTENER_RESERVA,
	OBTENER_RESERVAID,
	ACTULIZAR_RESERVA,
	ELIMINAR_RESERVA
} from '../../types'

export default (state, action)=>{
	switch(action.type){

		case AGREGAR_RESERVA:
			return{
				...state,
				reserva: action.payload
			}

		case OBTENER_RESERVA:
			return{
				...state,
				reservas: action.payload
			}
		
		case OBTENER_RESERVAID:
			return{
				...state,
				reserva: action.payload
			}
		
		case ELIMINAR_RESERVA:
			return{
				...state,
				reservas: state.reservas.filter(reserva=> reserva._id!==
				action.payload)
			}

		case ACTULIZAR_RESERVA:
			return{
				...state,
				reservas: state.reservas.map(reserva=>{
					if(reserva._id === action.payload._id){
						reserva.estado = action.payload.estado;
					}
				})
			}
		default:
			return state;
	}
}