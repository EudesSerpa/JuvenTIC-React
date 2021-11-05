import React, {useState, useContext, useEffect} from 'react'
import NavBar from '../../Components/NavBar/index';
import AuthContext from '../../context/autenticacion/authContext';
import ComentContext from '../../context/comentarios/comentContext';
import Swal from 'sweetalert2';

export default function Menu() {

    const authContext = useContext(AuthContext);
    const {autenticado, usuario, usuarioAutenticado} = authContext;

    const comentContext = useContext(ComentContext);
    const {crearComentarios} = comentContext;

    useEffect(()=>{
        usuarioAutenticado()
    }, [])

    return (
        <div>
            <NavBar/>
        </div>  
        
    )
}
