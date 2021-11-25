import React, {useReducer} from 'react';
import ComentContext from './comentContext';
import ComentReducer from './comentReducer';
import axios from 'axios';

import {
	CREAR_COMENTARIOS,
	OBTENER_COMENTARIOS,
	EDITAR_COMENTARIOS,
	BORRAR_COMENTARIOS
} from '../../types'

const ComentState = props =>{
	const initialState = {
		comentario: null,
		comentarios: []
	}

	const [state, dispatch] = useReducer(ComentReducer, initialState);

	//Crear comentarios
	const crearComentarios = async (datos)=>{
		const token = localStorage.getItem('token')
		if(token){
			try{
				const res = await axios.post('https://api-restauran.herokuapp.com/api/comentarios', datos, {
					headers: {
					'x-token': token
					}
				});
<<<<<<< HEAD
				console.log(res.data.comentario)
=======
>>>>>>> 2ffec6030c1a3855325563f69e913cf52d2355ab

				dispatch({
					type: CREAR_COMENTARIOS,
					payload: res.data.comentario
				}) 
			}catch(error){
				console.log(error)
			}
		}
	}

	//Obtener comentarios
	const obtenerComentarios = async ()=>{
		try{
			const res = await axios.get('https://api-restauran.herokuapp.com/api/comentarios');
<<<<<<< HEAD
			console.log(res.data.comentario)
=======
>>>>>>> 2ffec6030c1a3855325563f69e913cf52d2355ab

			dispatch({
				type: OBTENER_COMENTARIOS,
				payload: res.data.comentario
			}) 
		}catch(error){
			console.log(error)
		}	
	}

	//Borrar comentarios
	const borrarComentarios = async (id)=>{
		const token = localStorage.getItem('token')
		if(token){
			try{
				const res = await axios.delete(`https://api-restauran.herokuapp.com/api/comentarios/${id}`, {
					headers: {
					'x-token': token
					}
				});
<<<<<<< HEAD
				console.log(res)
=======
>>>>>>> 2ffec6030c1a3855325563f69e913cf52d2355ab

				dispatch({
					type: BORRAR_COMENTARIOS,
					payload: id
				}) 
			}catch(error){
				console.log(error)
			}
		}
	}
	
	//Editar comentarios
	const editarComentario = async (comentario)=>{
		const token = localStorage.getItem('token')
		if(token){
			try{
				const res = await axios.put(`https://api-restauran.herokuapp.com/api/comentarios/${comentario._id}`, comentario, {
					headers: {
					'x-token': token
					}
				});
<<<<<<< HEAD
				console.log(res)
=======
>>>>>>> 2ffec6030c1a3855325563f69e913cf52d2355ab

				dispatch({
					type: EDITAR_COMENTARIOS,
					payload: comentario
				}) 
			}catch(error){
				console.log(error)
			}
		}
	}

	return(
		<ComentContext.Provider
			value={{
				comentario: state.comentario,
				comentarios: state.comentarios,
				crearComentarios,
				obtenerComentarios,
				borrarComentarios,
				editarComentario
			}}
		>{props.children}
			
		</ComentContext.Provider>
	);
}

export default ComentState;