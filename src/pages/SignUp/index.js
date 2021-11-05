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
            <div class="container">
                <div class="row">
                  <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card border-0 shadow rounded-3 my-5">
                      <div class="card-body p-4 p-sm-5">
                        <h5 class="card-title text-center mb-5 fw-light fs-5">Sign Up</h5>
                        <form onSubmit={onSubmit}>
                        <div class="form-floating mb-3">
                            <input 
                                type="text" 
                                class="form-control" 
                                id="floatingInput" 
                                placeholder="name@example.com"
                                name="nombre"
                                value={nombre}
                                onChange={onChange}
                                />
                            <label for="floatingInput">Name</label>
                          </div>
                          <div class="form-floating mb-3">
                            <input 
                                type="email" 
                                class="form-control" 
                                id="floatingInput" 
                                placeholder="name@example.com"
                                name="correo"
                                value={correo}
                                onChange={onChange}
                                />
                            <label for="floatingInput">Email address</label>
                          </div>
                          <div class="form-floating mb-3">
                            <input 
                                type="password" 
                                class="form-control" 
                                id="floatingPassword" 
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={onChange}
                                />
                            <label for="floatingPassword">Password</label>
                          </div>
                          <div class="form-floating mb-3">
                            <input 
                                type="password" 
                                class="form-control" 
                                id="floatingPassword" 
                                placeholder="Password"
                                name="confirmar"
                                value={confirmar}
                                onChange={onChange}
                                />
                            <label for="floatingPassword">Confirm Password</label>
                          </div>
                          <div class="d-grid">
                            <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign up
                            </button>
                          </div>
                        </form>
                        <Link to={'/sign-in'} className="enlace-cuenta">
                            Iniciar Sesión
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>   
    )
}

export default NuevaCuenta;