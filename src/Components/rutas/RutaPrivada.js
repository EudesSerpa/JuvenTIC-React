import React, {useContext, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../../Context/autenticacion/authContext';

import Admin from '../../pages/Admin'

function RutaPrivada({component, ...rest}){
	const authContext = useContext(AuthContext);
    const {autenticado, usuario, usuarioAutenticado} = authContext;

    useEffect(() => {
        usuarioAutenticado();
		console.group('RUTA PRIVADA');
		console.log(component);
		console.log(autenticado);
		console.log(usuario?.rol);
		console.groupEnd();
    }, [])

	return(
		<Route {...rest}>
			{autenticado
				? (usuario?.rol === 'ADMIN_ROLE' || usuario?.rol === 'EMPLOYEE_ROLE')
					? <Admin active={component} />
					: <Redirect to='/'/>
				: <h1>Fail no esta autenticado</h1>
			}
		</Route>
	)
}

export default RutaPrivada;