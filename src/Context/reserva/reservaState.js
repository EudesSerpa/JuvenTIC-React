import React, {useReducer} from 'react';
import ReservaContext from './reservaContext';
import ReservaReducer from './reservaReducer';
import axios from 'axios';

 import {
	AGREGAR_RESERVA,
	OBTENER_RESERVA,
	OBTENER_RESERVAID,
	ACTULIZAR_RESERVA,
	ELIMINAR_RESERVA
} from '../../types'

const ReservaState = props =>{
	const initialState = {
		reserva: null,
		reservas: []
	}

	const [state, dispatch] = useReducer(ReservaReducer, initialState);

	
	const crearReservas = async (datos)=>{
		//const token = localStorage.getItem('token')
		
		try{
			const res = await axios.post('https://api-restauran.herokuapp.com/api/reservas', datos);

			dispatch({
				type: AGREGAR_RESERVA,
				payload: res.data.reserva
			})
		}catch(error){
			console.log(error)
		}		
	}

	
	const obtenerReserva = async ()=>{
		try{
			const res = await axios.get('https://api-restauran.herokuapp.com/api/reservas');

			dispatch({
				type: OBTENER_RESERVA,
				payload: res.data.reserva
			})
		}catch(error){
			console.log(error)
		}
	}

	const obtenerPlatosID = async (id)=>{
		try{
			const res = await axios.get(`https://api-restauran.herokuapp.com/api/reservas/${id}`);

			dispatch({
				type: OBTENER_RESERVAID,
				payload: res.data.reserva
			})
		}catch(error){
			console.log(error)
		}
	}
	
	const borrarReserva = async (id)=>{
		//const token = localStorage.getItem('token')
		
		try{
			const res = await axios.delete(`https://api-restauran.herokuapp.com/api/reservas/${id}`);

			dispatch({
				type: ELIMINAR_RESERVA,
				payload: id
			})
		}catch(error){
			console.log(error)
		}
	}

	
	const editarReserva = async (reserva)=>{
		//const token = localStorage.getItem('token')
		
		try{
			const res = await axios.put(`https://api-restauran.herokuapp.com/api/reservas/${reserva._id}`, reserva);

			dispatch({
				type: ACTULIZAR_RESERVA,
				payload: reserva
			}) 
		}catch(error){
			console.log(error)
		}
	}

	return(
		<ReservaContext.Provider
			value={{
				reserva: state.reserva,
				reservas: state.reservas,
				crearReservas,
				obtenerReserva,
				obtenerPlatosID,
				borrarReserva,
				editarReserva
			}}
		>{props.children}

		</ReservaContext.Provider>
	);
}

export default ReservaState;