import React, {useReducer} from 'react';
import ContactoContext from './contactoContext';
import ContactoReducer from './contactoReducer';
import axios from 'axios';

 import {
	OBTENER_CONTACTO,
	AGREGAR_CONTACTO,
	ELIMINAR_CONTACTO,
} from '../../types'

const ContactoState = props =>{
	const initialState = {
		contacto: null,
		contactos: []
	}

	const [state, dispatch] = useReducer(ContactoReducer, initialState);

	//Crear contactos
	const crearContacto = async (datos)=>{
		//const token = localStorage.getItem('token')
		
		try{
			const res = await axios.post('https://api-restauran.herokuapp.com/api/contactos', datos);

			dispatch({
				type: AGREGAR_CONTACTO,
				payload: res.data.contacto
			})
		}catch(error){
			console.log(error)
		}		
	}

	//Obtener contactos
	const obtenerContactos = async ()=>{
		try{
			const res = await axios.get('https://api-restauran.herokuapp.com/api/contactos');

			dispatch({
				type: OBTENER_CONTACTO,
				payload: res.data.contacto
			})
		}catch(error){
			console.log(error)
		}
	}


	//Borrar contacto
	const borrarContacto = async (id)=>{
		//const token = localStorage.getItem('token')
		
		try{
			const res = await axios.delete(`https://api-restauran.herokuapp.com/api/contactos/${id}`);

			dispatch({
				type: ELIMINAR_CONTACTO,
				payload: id
			})
		}catch(error){
			console.log(error)
		}
	}

	

	return(
		<ContactoContext.Provider
			value={{
				contacto: state.contacto,
				contactos: state.contactos,
				crearContacto,
				obtenerContactos,
				borrarContacto,
			}}
		>{props.children}

		</ContactoContext.Provider>
	);
}

export default ContactoState;