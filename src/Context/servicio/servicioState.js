import React, {useReducer} from 'react'

import servicioReducer from './servicioReducer'
import ServicioContext from './servicioContext'

const ServicioState = (props) => {

    const inicialState = {
        serviciosList: []
    }

    const [state, dispatch] = useReducer(servicioReducer, inicialState)

    const obtenerServicios = async () => {
        try{
			const res = await axios.get('https://api-restauran.herokuapp.com/api/servicios');

            console.log(res.data)

			dispatch({
                type: 'OBTENER_SERVICIO',
                payload: res.data.servicio
            }) 
		}catch(error){
			console.log(error)
		}	
        
    }

    const eliminarServicio = (id) => {
        dispatch({
            type: 'ELIMINAR_SERVICIO',
            payload: serviciosList
        })
    }

    const agregarServicio = (newCompra) => {
        dispatch({
            type: 'AGREGAR_SERVICIO',
            payload: serviciosList
        })
    }

    const editarServicio = (compraActualizar) => {
        dispatch({
            type: 'ACTULIZAR_SERVICIO',
            payload: serviciosList
        })
    }

    return (
        <ServicioContext.Provider value={{
            servicios: state.serviciosList,
            eliminarServicio,
            agregarServicio,
            obtenerServicios,
            editarServicio
        }}>
            {props.children}
        </ServicioContext.Provider>
    )
    
}

export default ServicioState