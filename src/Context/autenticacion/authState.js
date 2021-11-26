import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import axios from 'axios';

import {
	REGISTRO_EXITOSO,
	REGISTRO_ERROR,
	OBTENER_USUARIO,
	OBTENER_USUARIOS,
	LOGIN_EXITOSO,
	LOGIN_ERROR,
	CERRAR_SESION
} from '../../types';

const AuthState = props =>{
	const initialState = {
		token: localStorage.getItem('token'),
		autenticado: null,
		usuario: null,
		usuarios: [],
		mensaje: null
	}

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	// Obtener usuario
	const obtenerUsuarios = async ()=>{
		try{
			const res = await axios.get('https://api-restauran.herokuapp.com/api/usuarios/');

			dispatch({
				type: OBTENER_USUARIOS,
				payload: res.data.usuarios
			})
		}catch(error){
			console.log(error.message)
		}
	}

	//Registrar usuarios
	const registrarUsuario = async (datos)=>{
		try{
			const res = await axios.post('https://api-restauran.herokuapp.com/api/usuarios/', datos);
			console.log(res.data);

			dispatch({
				type: REGISTRO_EXITOSO,
				payload: res.data
			})

			usuarioAutenticado()
		}catch(error){
			console.log(error.response.data.errors)
			dispatch({
				type: REGISTRO_ERROR,
				payload: error.response.data.errors
			})
		}
	}

	//Retornar usuario autenticado
	const usuarioAutenticado = async ()=>{
		const token = localStorage.getItem('token')
		if(token){
			try{
				const res = await axios.get('https://api-restauran.herokuapp.com/api/auth/login/',{
					headers: {
						'x-token': token
					}
				})
				console.log(res.data)
				dispatch({
					type: OBTENER_USUARIO,
					payload: res.data.usuario
				})

			}catch(error){
				console.log(error.response);
				dispatch({
					type: LOGIN_ERROR
				})
			}
		}
	}

	//iniciar sesion
	const iniciarSesion = async (datos)=>{
		try{
			const res = await axios.post('https://api-restauran.herokuapp.com/api/auth/login/', datos)
			console.log(res)
			dispatch({
				type: LOGIN_EXITOSO,
				payload: res.data
			})

			usuarioAutenticado()
		}catch(error){
			console.log(error.response.data)
			dispatch({
				type: LOGIN_ERROR,
				payload: error.response.data
			})
		}
	}

	const cerrarSesion = ()=>{
		dispatch({
			type: CERRAR_SESION
		})
	}

	return(
		<AuthContext.Provider
			value={{
				token: state.token,
				autenticado: state.autenticado,
				usuario: state.usuario,
				usuarios: state.usuarios,
				mensaje: state.mensaje,
				obtenerUsuarios,
				registrarUsuario,
				iniciarSesion,
				usuarioAutenticado,
				cerrarSesion
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
}

export default AuthState;
