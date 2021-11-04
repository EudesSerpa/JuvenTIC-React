import React, {useContext, useEffect} from 'react'
import NavBar from '../../Components/NavBar/index';
import AuthContext from '../../Context/autenticacion/authContext';
import Swal from 'sweetalert2';

export default function Menu() {

    const authContext = useContext(AuthContext);
    const {autenticado, usuario, usuarioAutenticado} = authContext;

    useEffect(()=>{
        // Es asincrono? El nombre no aparece en la 1° ejecucion per se
        usuarioAutenticado();

        if(autenticado){
            Swal.fire({
                icon: 'success',
                title: `Bienvenido ${usuario?.nombre}`,
                showConfirmButton: false,
                timer: 2000,
            });
        }
    }, [])


    return (
        <div>
            <NavBar/>
            <h1>Menu</h1>
        </div>
    )
}
