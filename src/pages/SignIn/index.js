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
            <div className="container">
                <div className="row">
                  <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                      <div className="card-body p-4 p-sm-5">
                        <h4 className="text-center mb-5 ">Sign In</h4>
                        <form onSubmit={onSubmit}>
                          <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                name="correo"
                                value={correo}
                                onChange={onChange}
                                />
                            <label htmlFor="floatingInput">Email address</label>
                          </div>
                          <div className="form-floating mb-3">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={onChange}
                                />
                            <label htmlFor="floatingPassword">Password</label>
                          </div>

                          <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                            <label className="form-check-label" htmlFor="rememberPasswordCheck">
                              Remember password
                            </label>
                          </div>
                          <div className="d-grid">
                            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign in
                            </button>
                          </div>
                          <hr className="my-4"/>
                          <div className="d-grid mb-2">
                            <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                              <i className="fab fa-google me-2"></i> Sign in with Google
                            </button>
                          </div>
                          <div className="d-grid">
                            <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                              <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                            </button>
                          </div>
                        </form>

                        <Link to={'/sign-up'} className="enlace-cuenta">
                            Registrar cuenta
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>     
    );
}

export default Login;