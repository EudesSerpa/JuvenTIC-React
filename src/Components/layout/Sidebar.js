import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';
import * as FaIcons from 'react-icons/fa'

const Sidebar = ()=>{
	const authContext = useContext(AuthContext);
	const {cerrarSesion} = authContext;
	return(
		<div>
			
			<div className="sidebar bg-light">
				<ul>
					<li>
						<NavLink to={"/home"} className="text-dark rounded py-2 w-100 d-inline-block px-3" 
						activeClassname="active"><FaIcons.FaHome className="me-2"/> Inicio</NavLink>
					</li>
					<li>
						<NavLink to={"/platos"} className="text-dark rounded py-2 w-100 d-inline-block px-3" 
						activeClassname="active"><FaIcons.FaHamburger className="me-2"/>Platos</NavLink>
					</li>
					<li>
						<NavLink to={"/services"} className="text-dark rounded py-2 w-100 d-inline-block px-3" 
						activeClassname="active"><FaIcons.FaServicestack className="me-2"/>Servicios</NavLink>
					</li>
					<li>
						<NavLink to={"/user"} className="text-dark rounded py-2 w-100 d-inline-block px-3" 
						activeClassname="active"><FaIcons.FaUserFriends className="me-2"/> Usuarios</NavLink>
					</li>
					<li>
					
						<div
							type="submit"
							onClick={()=>cerrarSesion()}
							>
							<FaIcons.FaWindowClose className="me-2"/>
							Cerrar Sesion
						</div>
						
					</li>

				</ul>
			</div>
		</div>
	);
}

export default Sidebar;