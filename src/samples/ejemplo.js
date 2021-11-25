import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../Context/autenticacion/authContext';
import PlatosContext from '../Context/platos/platosContext'
import Swal from 'sweetalert2';
import NavBar from '../Components/NavBar/index';

const Ejemplo = (props) =>{

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    //context para traer la funcion de crear platos
    const platosContext = useContext(PlatosContext);
    const { crearPlatos } = platosContext;

    //en caso de que el usuario este autenticado o registrado o haya un error
    useEffect(()=>{
        usuarioAutenticado()
    }, [])

    //state para los datos del plato
    const [plato, guardarPlato] = useState({
        nombre:'',
        precio:'',
        descripcion: ''
    });

    //state para la imagen del plato
    const [file, setFile] = useState()

    const {nombre, precio, descripcion, image} = plato;

    //funcion para capturar el valor de los campos
    const onChange = (e)=>{
        guardarPlato({
            ...plato,
            [e.target.name] : e.target.value
        })
    }

    //funcion para obtener la informacion de la imagen
    const handleChange = (e)=>{
        setFile(e.target.files[0])
    }

    //funcion para enviar los datos
    const onSubmit = (e)=>{
        e.preventDefault()

        if(nombre.trim() === '' || precio.trim() === '' || descripcion.trim() === ''){
            Swal.fire({
              icon: 'error',
              title: 'Todos los campos son obligatorios',
              showConfirmButton: false,
              timer: 2500
            })
            return
        }

        //se deben poner los datos dentro de formData para que funcione
        const formData = new FormData()

        formData.append('image', file);
        formData.append('nombre', nombre);
        formData.append('descripcion', descripcion);
        formData.append('precio', precio);

        //aqui se llama la funcion de crear platos y se le pasan los datos como parametros
        crearPlatos(formData)

    }
    return(
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                  <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                      <div className="card-body p-4 p-sm-5">
                        <h5 className="card-title text-center mb-5 fw-light fs-5">Sign Up</h5>
                        <form onSubmit={onSubmit} enctype="multipart/form-data">
                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="floatingInput" 
                                placeholder="name@example.com"
                                name="nombre"
                                value={nombre}
                                onChange={onChange}
                                />
                            <label for="floatingInput">Name</label>
                          </div>
                          
                          <div className="form-floating mb-3">
                            <input 
                                type="number" 
                                className="form-control" 
                                id="floatingInput" 
                                placeholder="name@example.com"
                                name="precio"
                                value={precio}
                                onChange={onChange}
                                />
                            <label for="floatingInput">Precio</label>
                          </div>
                          
                          <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className="form-control"
                                id="floatingPassword" 
                                placeholder="Password"
                                name="descripcion"
                                value={descripcion}
                                onChange={onChange}
                                />
                            <label for="floatingPassword">descripcion</label>
                          </div>
                          <div className="form-floating mb-3">
                            <input 
                                type="file" 
                                className="form-control"
                                id="floatingPassword"
                                onChange={handleChange}
                                />
                          </div>
                          <div className="d-grid">
                            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign up
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

export default Ejemplo;