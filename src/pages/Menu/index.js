import React, {useContext, useEffect, Component} from 'react'
import NavBar from '../../Components/NavBar/index';
import AuthContext from '../../Context/autenticacion/authContext';
import ComentContext from '../../Context/comentarios/comentContext'
import PlatosContext from '../../Context/platos/platosContext'

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
        const newProducto = {
            precio: precio,
            nombre: nombre,
            descripcion: descripcion,
            imgURL: "https://res.cloudinary.com/universidad-de-cartagena/image/upload/v1632686841/salmon-518032__340_nbjntu.jpg"
        }

        console.log(this.props.actualizarDatos)
        this.props.actualizarDatos("add", newProducto)
    
    }
    
    deleteProducto = (id) => {
        this.props.actualizarDatos("delea", id)
    }
    
    updateProoducto = (id, cambios) => {
        const newProductos = this.props.datos.map( (producto) => {
            if(producto.id === id){
                producto.title = cambios.title
                producto.precio = cambios.precio
                producto.descrip = cambios.descrip
                producto.thumbnailUrl = cambios.urlImg
            }
            return producto
        })
    
        this.props.actualizarDatos("edit", newProductos)    
    }

    addCompra = (id, nombrePlato, precio) => {
        var existe = false;
        const comprasLis = this.props.compras.map( compra => {
            if(id === compra.id_plato){
                existe = true;
                return {
                    ...compra,
                    cantidad: compra.cantidad + 1
                }
            }
            return compra
        })

        if(!existe){
            const newCompra = {
                id: this.props.compras.length + 1,
                id_plato: id,
                nombrePlto: nombrePlato,
                cantidad: 1,
                precio: precio
            }
            const listCompraF = [...this.props.compras, newCompra]
            this.props.actualizarCompras(listCompraF)
        }
        else{
            this.props.actualizarCompras(comprasLis)
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
            id_plato: idPlato,
            comentario: comentario,
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
                        deleteP = {this.deleteProducto} 
                        updateP = {this.updateProoducto} 
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
        return <>
            <NavBar/>
            <div className="bodyM">
                <div className="conTitleM">
                    <h1>THE MENU</h1>
                </div>
                {this.servicio(rol, datos)}
            </div>
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

    useEffect(()=>{
        // Es asincrono? El nombre no aparece en la 1° ejecucion per se
        usuarioAutenticado();
        obtenerPlatos();
        obtenerComentarios();
    }, [])

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
        }
    }

    return <MenuClass 
        rol = {usuario ? usuario.rol : 'NONE_ROLE'} 
        nombre = {usuario ? usuario.nombre : ''} 
        datos = {platos}
        comentarios = {comentarios}
        actualizarDatos = {productosActualizar}
        actualizarcomentario = {comentariosActualizar}
    />
        
}

const admin = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}
