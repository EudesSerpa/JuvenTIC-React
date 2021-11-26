import React, {useReducer} from 'react';
import PlatosContext from './platosContext';
import PlatosReducer from './platosReducer';
import axios from 'axios';

 import {
	CREAR_PLATOS,
	OBTENER_PLATOS,
	OBTENER_PLATOID,
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

			dispatch({
				type: OBTENER_PLATOS,
				payload: res.data.plato
			})
		}catch(error){
			console.log(error)
		}
	}

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

				

				dispatch({
					type: EDITAR_PLATOS,
					payload: plato
				})
			}catch(error){
				console.log(error.message)
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

export default PlatoState;
