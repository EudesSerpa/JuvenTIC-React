import React, {useReducer} from 'react';
import PlatosContext from './platosContext';
import PlatosReducer from './platosReducer';
import axios from 'axios';

 import {
	CREAR_PLATOS,
	OBTENER_PLATOS,
<<<<<<< HEAD
=======
	OBTENER_PLATOID,
>>>>>>> 2ffec6030c1a3855325563f69e913cf52d2355ab
	EDITAR_PLATOS,
	BORRAR_PLATOS
} from '../../types'

const PlatoState = props =>{
	const initialState = {
		plato: null,
		platos: []
	}

	const [state, dispatch] = useReducer(PlatosReducer, initialState);

	//Crear platos
	const crearPlatos = async (datos)=>{
		const token = localStorage.getItem('token')
		if(token){
			try{
				const res = await axios.post('https://api-restauran.herokuapp.com/api/platos', datos, {
					headers: {
					'x-token': token
					}
				});
<<<<<<< HEAD
				console.log(res)
=======
>>>>>>> 2ffec6030c1a3855325563f69e913cf52d2355ab

				dispatch({
					type: CREAR_PLATOS,
					payload: res.data.plato
				}) 
			}catch(error){
				console.log(error)
			}
		}
	}

	//Obtener platos
	const obtenerPlatos = async ()=>{
		try{
			const res = await axios.get('https://api-restauran.herokuapp.com/api/platos');
<<<<<<< HEAD
			console.log(res.data.plato)
=======
>>>>>>> 2ffec6030c1a3855325563f69e913cf52d2355ab

			dispatch({
				type: OBTENER_PLATOS,
				payload: res.data.plato
			}) 
		}catch(error){
			console.log(error)
		}	
	}
<<<<<<< HEAD
=======
	
	//obtener un plato en especifico por id
	const obtenerPlatosID = async (id)=>{
		try{
			const res = await axios.get(`https://api-restauran.herokuapp.com/api/platos/${id}`);

			dispatch({
				type: OBTENER_PLATOID,
				payload: res.data.plato
			}) 
		}catch(error){
			console.log(error)
		}	
	}
>>>>>>> 2ffec6030c1a3855325563f69e913cf52d2355ab

	//Borrar platos
	const borrarPlato = async (id)=>{
		const token = localStorage.getItem('token')
		if(token){
			try{
				const res = await axios.delete(`https://api-restauran.herokuapp.com/api/platos/${id}`, {
					headers: {
					'x-token': token
					}
				});
<<<<<<< HEAD
				console.log(res)
=======
>>>>>>> 2ffec6030c1a3855325563f69e913cf52d2355ab

				dispatch({
					type: BORRAR_PLATOS,
					payload: id
				}) 
			}catch(error){
				console.log(error)
			}
		}
	}
	
	//Editar platos
	const editarPlato = async (plato)=>{
		const token = localStorage.getItem('token')
		if(token){
			try{
				const res = await axios.put(`https://api-restauran.herokuapp.com/api/platos/${plato._id}`, plato, {
					headers: {
					'x-token': token
					}
				});
<<<<<<< HEAD
				console.log(res)
=======
>>>>>>> 2ffec6030c1a3855325563f69e913cf52d2355ab

				dispatch({
					type: EDITAR_PLATOS,
					payload: plato
				}) 
			}catch(error){
				console.log(error)
			}
		}
	}

	return(
		<PlatosContext.Provider
			value={{
				plato: state.plato,
				platos: state.platos,
				crearPlatos,
				obtenerPlatos,
				borrarPlato,
				editarPlato
			}}
		>{props.children}
			
		</PlatosContext.Provider>
	);
}

<<<<<<< HEAD
export default PlatoState;
=======
export default PlatoState;
>>>>>>> 2ffec6030c1a3855325563f69e913cf52d2355ab
