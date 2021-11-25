import React, {useContext, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../../Context/autenticacion/authContext';

import Admin from '../../pages/Admin'

function RutaPrivada({Component: Component, ...rest}){

	const authContext = useContext(AuthContext);
	const {autenticado, usuarioAutenticado, usuario} = authContext;

	useEffect(()=>{
		usuarioAutenticado()
	}, [])

	return(
		<Route {...rest}>
			{ autenticado 
				? usuario === 'ADMIN_ROLE' || usuario === 'EMPLOYEE_ROLE'
					? <Admin active={Component} />
					: <Redirect to='/'/>
				: <Redirect to='/sign-in'/>
			}
		</Route>
	)
}

export default RutaPrivada;