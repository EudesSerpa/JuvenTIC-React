import React, {useContext, useEffect, Component} from 'react'
import NavBar from '../../Components/NavBar/index';
import Footer from '../../Components/Footer'

import AuthContext from '../../Context/autenticacion/authContext';
import ComentContext from '../../Context/comentarios/comentContext'
import PlatosContext from '../../Context/platos/platosContext'
import CarritoContext from '../../Context/carrtio/CarritoContext';

import '../Styles/styleM.css'

import productos from '../../samples/productos.json'
import Comentarios from '../../samples/Comentarios.json'

import AddProducto from './AddProducto'
import Producto from './Producto'

class MenuClass extends Component{

    state = {
        agregar: false,
        nav: null
    }


    addProductos = (nombre, precio, descripcion, imagen) => {
        const formData = new FormData()

        formData.append('image', imagen);
        formData.append('nombre', nombre);
        formData.append('descripcion', descripcion);
        formData.append('precio', precio);

        this.props.actualizarDatos("add", formData)
    }


    addCompra = (id, nombrePlato, precio) => {
        var existe = false;
        let newCompra = {}
        const comprasLis = this.props.compras.map( compra => {
            if(id === compra.id_plato){
                existe = true;
                const compraExi = {
                    id: compra.id,
                    id_plato: id,
                    nombrePlto: nombrePlato,
                    cantidad: compra.cantidad + 1,
                    precio: precio
                }
                newCompra = compraExi
                return compraExi
            }
            return compra
        })

        if(!existe){
            newCompra = {
                id: this.props.compras.length + 1,
                id_plato: id,
                nombrePlto: nombrePlato,
                cantidad: 1,
                precio: precio
            }
            this.props.actualizarCompra('add', newCompra)
        }
        else{
            this.props.actualizarCompra('act', newCompra)
        }
    }

    agregarF = () => {
        this.setState({agregar: !this.state.agregar})
    }

    agregarProducto = () => {
        if(this.state.agregar){
            return <AddProducto agregar ={this.agregarF} agregarFunc={this.addProductos}/>
        }
        else {
            return <div>

            </div>
        }
    }

    addComentario = (idPlato, comentario) => {

        const newComentario = {
            plato: idPlato,
            texto: comentario
        }
    
        this.props.actualizarcomentario("add", newComentario)
    }

    servicio = ( rol, datos ) =>{
        if(rol === 'ADMIN_ROLE'){
            return <div style={admin}>
                <div className='opciones'>
                    <h3>Bienvenido {this.props.nombre} Admin</h3>
                    <div className="botonesM">
                        <a className="bDesc" href="https://drive.google.com/file/d/1a9NeTbStyBchNz6gmaGM61If4AkFcZJw/view?usp=sharing">
                            <ion-icon name="document-text-outline"></ion-icon>
                        </a>
                        <button className="bAgregar" onClick={this.agregarF}>
                            <ion-icon name="duplicate-outline"></ion-icon>
                        </button>
                    </div>
                </div>
                <div className="containerM">
                    {datos.map((dato) => <Producto 
                        dato = {dato} 
                        rol = {rol} 
                        nombre = {this.props.nombre}
                        key={dato._id} 
                        addC = {this.addComentario}
                        comentariosL = {this.props.comentarios}
                        agregarCarrito = {this.addCompra}
                    />)}
                </div>
                {this.agregarProducto()}
            </div>
        }
        else if(rol === 'USER_ROLE'){
            return <div style={admin}>
                <div className='opciones'>
                    <h3>Bienvenido {this.props.nombre}</h3>
                    <div className="botonesM">
                        <a className="bDesc" href="https://drive.google.com/file/d/1a9NeTbStyBchNz6gmaGM61If4AkFcZJw/view?usp=sharing">D</a>
                    </div>
                </div>
                <div className="containerM">
                    {datos.map((dato) => <Producto 
                        dato = {dato} 
                        rol = {rol} 
                        nombre = {this.props.nombre}
                        key={dato._id}
                        addC = {this.addComentario}
                        comentariosL = {this.props.comentarios}
                        agregarCarrito = {this.addCompra}
                    />)}
                </div>
            </div>
        }
        else {
            return <div style={admin}>
                <div className='opciones'>
                    <h3>Bienvenido</h3>
                    <div className="botonesM">
                        <a className="bDesc" href="https://drive.google.com/file/d/1a9NeTbStyBchNz6gmaGM61If4AkFcZJw/view?usp=sharing">D</a>
                    </div>
                </div>
                <div className="containerM">
                    {datos ? datos.map((dato) => <Producto 
                        dato = {dato} 
                        rol = {rol} 
                        nombre = {this.props.nombre}
                        key={dato._id}
                        addC = {this.addComentario}
                        comentariosL = {this.props.comentarios}
                        agregarCarrito = {this.addCompra}
                    />) : <h1> ERROR </h1>}
                </div>
            </div>
        }
    }

    render(){
        const datos = this.props.datos
        const rol = this.props.rol
        
        this.props.obtenerPlatos()
        this.props.obtenerComentarios()

        return <>
            <NavBar/>
            <div className="bodyM">
                <div className="conTitleM">
                    <h1>THE MENU</h1>
                </div>
                {this.servicio(rol, datos)}
            </div>
            <Footer/>
        </>
    }
}

export default function Menu() {

    const authContext = useContext(AuthContext);
    const {autenticado, usuario, usuarioAutenticado} = authContext;

    const platosContext = useContext(PlatosContext);
    const {crearPlatos, obtenerPlatos, borrarPlato, editarPlato, platos} = platosContext

    const comentContext = useContext(ComentContext);
    const {obtenerComentarios, crearComentarios, comentarios} = comentContext

    const carritoContext = useContext(CarritoContext)
    const {compras, actualizar, add} = carritoContext

    useEffect(()=>{
        // Es asincrono? El nombre no aparece en la 1° ejecucion per se
        usuarioAutenticado();
        obtenerPlatos();
        obtenerComentarios();
    }, [])

    let actualizarCompras = (typeFunction, dato) => {
        if(typeFunction == 'add'){
            add(dato)
        }
        else if(typeFunction == 'act'){
            actualizar(dato)
        }
    }

    let productosActualizar = (typeFuncion, dato) => { 
        if(typeFuncion === "delea"){
            borrarPlato(dato)
        }
        else if(typeFuncion === "edit"){
            editarPlato(dato)
        }
        else if(typeFuncion === "add"){
            crearPlatos(dato)
            console.log(dato)
        }
    }

    let comentariosActualizar = (typeFuncion, dato) => {
        if(typeFuncion === "add"){
            crearComentarios(dato)
            obtenerComentarios()
        }
    }

    return <MenuClass 
        rol = {usuario ? usuario.rol : 'NONE_ROLE'} 
        nombre = {usuario ? usuario.nombre : ''} 
        datos = {platos}
        compras = {compras}
        comentarios = {comentarios}
        actualizarDatos = {productosActualizar}
        actualizarcomentario = {comentariosActualizar}
        actualizarCompra = {actualizarCompras}
        obtenerPlatos = {obtenerPlatos}
        obtenerComentarios = {obtenerComentarios}
    />
}

const admin = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}
