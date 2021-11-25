import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../Context/autenticacion/authContext';
import Swal from 'sweetalert2';
import NavBar from '../../Components/NavBar/index';

const NuevaCuenta = (props) =>{

    const authContext = useContext(AuthContext);
    const {autenticado, mensaje, registrarUsuario} = authContext;

    //en caso de que el usuario este autenticado o registrado o haya un error
    useEffect(()=>{
        if(autenticado){
            props.history.push('/menu');
        }

        if(mensaje){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Este correo ya esta registrado',
              showConfirmButton: false,
              timer: 2500
            })
        }
    }, [mensaje, autenticado, props.history])

    //state para inicio de sesión
    const [usuario, guardarUsuario] = useState({
        nombre:'',
        correo: '',
        password: '',
        confirmar: ''
    });

    const {nombre, correo, password, confirmar} = usuario;

    const onChange = (e)=>{
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault()

        if(nombre.trim() === '' || correo.trim() === '' || password.trim() === '' ||
        confirmar.trim() === ''){
            Swal.fire({
              icon: 'error',
              title: 'Todos los campos son obligatorios',
              showConfirmButton: false,
              timer: 2500
            })
            return
        }

        if(password.length < 6){
            Swal.fire({
              icon: 'error',
              title: 'Contraseña menor de 6 caracteres',
              showConfirmButton: false,
              timer: 2500
            })
            return
        }

        if (password !== confirmar) {
            Swal.fire({
              icon: 'error',
              title: 'Las contraseñas deben ser iguales',
              showConfirmButton: false,
              timer: 2500
            })
            return
        }
        registrarUsuario({
            nombre,
            correo,
            password
        });
    }
    return(
        <div>
            <NavBar/>
            <div className="wrapperrr fadeInDown">
              <div className="formContent">

                <Link to={'/sign-in'} className="inactive underlineHover linke">
                    Sign In
                </Link>
                <Link to={'/sign-up'} className="activado linke">
                    Sign Up 
                </Link>
                
                <form onSubmit={onSubmit}>
                    <input 
                    type="text" 
                    className="fadeIn second formSin"
                    placeholder="name"
                    name="nombre"
                    value={nombre}
                    onChange={onChange}
                    />

                  <input 
                    type="mail" 
                    id="login" 
                    className="fadeIn second formSin" 
                    placeholder="mail"
                    name="correo"
                    value={correo}
                    onChange={onChange}
                    />
                  <input 
                    type="password" 
                    id="password" 
                    className="fadeIn third formSin"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    />

                    <input 
                    type="password" 
                    id="password2" 
                    className="fadeIn third formSin"
                    placeholder="confirm password"
                    name="confirmar"
                    value={confirmar}
                    onChange={onChange}
                    />
                  <input type="submit" className="fadeIn fourth botones" value="registrar"/>
                </form>

                
                <div className="formFooter">
                  <a className="underlineHover" href="#">Forgot Password?</a>
                </div>

              </div>
            </div>
        </div>   
    )
}

export default NuevaCuenta;