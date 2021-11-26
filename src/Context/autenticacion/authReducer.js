import {
	REGISTRO_EXITOSO,
	REGISTRO_ERROR,
	OBTENER_USUARIO,
	OBTENER_USUARIOS,
	LOGIN_EXITOSO,
	LOGIN_ERROR,
	CERRAR_SESION
} from '../../types'

export default (state, action)=>{
	switch(action.type){
		case REGISTRO_EXITOSO:
			localStorage.setItem('token', action.payload.token);

			return{
				...state,
				autenticado: true,
				mensaje: null
			}

		case OBTENER_USUARIOS:
			return{
				...state,
				usuarios: action.payload
			}

		case OBTENER_USUARIO:
			return{
				...state,
				autenticado: true,
				usuario: action.payload
			}

		case REGISTRO_ERROR:
			localStorage.removeItem('token')
			return{
				...state,
				token: null,
				mensaje: action.payload
			}	
		case LOGIN_ERROR:
			return{
				...state,
				mensaje: action.payload
			} 

		case LOGIN_EXITOSO:
			localStorage.setItem('token', action.payload.token);
			return{
				...state,
				autenticado: true,
				mensaje: null
			}

		case CERRAR_SESION:
			localStorage.removeItem('token')
			return{
				...state,
				token: null,
				usuario: null,
				autenticado: null,
				mensaje: null
			}
		default:
			return state;
	}
}