import React, {useContext, useEffect} from 'react'
import NavBar from '../../Components/NavBar/index';
import AuthContext from '../../context/autenticacion/authContext';
import Swal from 'sweetalert2';

export default function Menu() {

    const authContext = useContext(AuthContext);
    const {autenticado, usuario, usuarioAutenticado} = authContext;

    useEffect(()=>{
        usuarioAutenticado()
    }, [])

    if(autenticado){
        Swal.fire(
            `Bienvenido ${usuario.nombre}`,
            'You clicked the button!',
            'success'
        )
    }

    return (
        <div>
            <NavBar/>
            <h1>Menu</h1>
        </div>
    )
}
