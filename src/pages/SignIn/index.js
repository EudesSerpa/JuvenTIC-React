import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../Context/autenticacion/authContext';
import Swal from 'sweetalert2';
import NavBar from '../../Components/NavBar/index'

const Login = (props)=>{

    const authContext = useContext(AuthContext);
    const {autenticado, mensaje, iniciarSesion, usuario} = authContext;

    //en caso de que el usuario este autenticado o error en el password y correo
    useEffect(()=>{
        if(autenticado){
            props.history.push('/menu');
        }

        if(mensaje){
            Swal.fire({
              icon: 'error',
              title: 'Correo o contraseña incorrectos',
              showConfirmButton: false,
              timer: 1800
            })
        }
    }, [mensaje, autenticado, props.history])

    //state para inicio de sesión
    const [user, guardarUsuario] = useState({
        correo: '',
        password: ''
    });

    const {correo, password} = user;

    const onChange = (e)=>{
        guardarUsuario({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault()

        if(correo.trim() === '' || password.trim() === ''){
            Swal.fire({
              icon: 'error',
              title: 'Todos los campos son obligatorios',
              showConfirmButton: false,
              timer: 1800
            })
            return
        }

        iniciarSesion({
            correo,
            password
        })
    }
    return(
        <div>
            <NavBar/>

            <div className="wrapperrr fadeInDown">
              <div className="formContent">
                
                <h2 className="active"> Sign In </h2>
                <Link to={'/sign-up'} className="active link">
                    Sign In
                </Link>
                <Link to={'/sign-up'} className="inactive underlineHover link">
                    Sign Up 
                </Link>
                
                <form onSubmit={onSubmit}>
                  <input 
                    type="mail" 
                    id="login" 
                    className="fadeIn second" 
                    name="login" 
                    placeholder="login"
                    name="correo"
                    value={correo}
                    onChange={onChange}
                    />
                  <input 
                    type="password" 
                    id="password" 
                    className="fadeIn third" 
                    name="login" 
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    />
                  <input type="submit" className="fadeIn fourth" value="Log In"/>
                </form>

                
                <div className="formFooter">
                  <a className="underlineHover" href="#">Forgot Password?</a>
                </div>

              </div>
            </div>
        </div>     
    );
}

export default Login;