import React, {useContext, useEffect} from 'react'

import Home from './components/Home'
import Menu from './components/Menu'
import Usuarios from './components/Usuarios'
import Servicios from './components/Servicios'
import Reservas from './components/Reservas'
import Comentarios from './components/Comentarios'
import Nosotros from './components/Nosotros'
import NavBar from './components/NavBar'

import AuthContext from '../../Context/autenticacion/authContext';
import ComentContext from '../../Context/comentarios/comentContext'
import PlatosContext from '../../Context/platos/platosContext'
import CarritoContext from '../../Context/carrtio/CarritoContext';

import './StyleAdmin/adminS.css'

export default function Admin(props) {
    const platosContext = useContext(PlatosContext);
    const {crearPlatos, obtenerPlatos, borrarPlato, editarPlato, platos} = platosContext

    const comentContext = useContext(ComentContext);
    const {obtenerComentarios, borrarComentarios, comentarios} = comentContext

    useEffect(()=>{
        obtenerPlatos();
        obtenerComentarios();
    }, [])

    function activeComponent(){
        console.log(props.active);

        if(props.active === 'menu'){
            return <Menu
                obtenerPlatos = {obtenerPlatos}
                platos = {platos}
                addPlato = {crearPlatos}
                deletePlato = {borrarPlato}
                editPlato = {editarPlato}
            />
        }
        else if(props.active === 'home'){
            return <Home
                totalUsuer = {0}
                totalPlatos = {platos.length}
                totalComentarios = {comentarios.length}
                totalReservas = {5}
            />
        }
        else if(props.active === 'user'){
            return <Usuarios/>
        }
        else if(props.active === 'servicios'){
            return <Servicios />
        }
        else if(props.active === 'comentarios'){
            return <Comentarios
                comentarios = {comentarios}
                platos = {platos}
                obtenerComentarios = {obtenerComentarios}
                deleteComentario = {borrarComentarios}
            />
        }
        else if(props.active === 'reservas'){
            return <Reservas/>
        }
        else if(props.active === 'nosotros'){
            return <Nosotros/>
        }
    }

    return <>
        <div className="body_Admin">
            <div className="container_Admin">

                <NavBar/>

                <div className="main">
                    <div className="topbar">
                        <div className="toggle">
                            <ion-icon name="menu-outline"></ion-icon>
                        </div>
                        {/* Search */}
                        <div className="search">
                            <label>
                                <input type="text" placeholder="Search here" />
                                <ion-icon name="search-outline"></ion-icon>
                            </label>
                        </div>
                        {/* userImg */}
                        <div className="user">
                            <img src="https://i.postimg.cc/28JTJD92/Joe-Uriah-Commission-by-The-Zombie-Cat-on-Deviant-Art.png" />
                        </div>
                    </div>

                    {activeComponent()}

                </div>
            </div>
        </div>
    </>
}
