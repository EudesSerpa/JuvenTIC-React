import React, {useReducer} from 'react';
import CompraContext from './compraContext';
import CompraReducer from './compraReducer';
import axios from 'axios';

 import {
	AGREGAR_RCOMPRA,
	OBTENER_RCOMPRA,
	ELIMINAR_RCOMPRA
} from '../../types'

const CompraState = props =>{
	const initialState = {
		compra: null,
		compras: []
	}

	const [state, dispatch] = useReducer(CompraReducer, initialState);

	
	const crearCompra = async (datos)=>{
		const token = localStorage.getItem('token')
		
		if(token){
			try{
				const res = await axios.post('https://api-restauran.herokuapp.com/api/compras', datos, {
					headers: {
					'x-token': token
					}
				});

				dispatch({
					type: AGREGAR_RCOMPRA,
					payload: res.data.compra
				})
			}catch(error){
				console.log(error)
			}	
		}
			
	}

	
	const obtenerCompra = async ()=>{
		try{
			const res = await axios.get('https://api-restauran.herokuapp.com/api/compras');

			dispatch({
				type: OBTENER_RCOMPRA,
				payload: res.data.compra
			})
		}catch(error){
			console.log(error)
		}
	}

	
	const borrarCompra = async (id)=>{
		//const token = localStorage.getItem('token')
		
		try{
			const res = await axios.delete(`https://api-restauran.herokuapp.com/api/compras/${id}`);

			dispatch({
				type: ELIMINAR_RCOMPRA,
				payload: id
			})
		}catch(error){
			console.log(error)
		}
	}

	return(
		<CompraContext.Provider
			value={{
				compra: state.compra,
				compras: state.compras,
				crearCompra,
				obtenerCompra,
				borrarCompra
			}}
		>{props.children}

		</CompraContext.Provider>
	);
}

export default CompraState;