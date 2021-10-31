import React, { Component } from 'react';

import '../Styles/styleM.css'

/* */
import Producto from './Producto';
import AddProducto from './AddProducto';

class Menu extends Component{

    state = {
        agregar: false,
        nav: null
    }

    addProductos = (nombre, precio, descricion, imagen) => {
        const newProducto = {
          precio: precio,
          id: this.props.datos.length + 1,
          title: nombre,
          descrip: descricion,
          thumbnailUrl: imagen
        }
    
        const productosList = [...this.props.datos, newProducto]

        this.props.actualizarDatos(productosList)
    
    }
     
    deleteProducto = (id) => {
        const newProductos = this.props.datos.filter(dato => dato.id !== id);
        this.props.actualizarDatos(newProductos)
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
    
        this.props.actualizarDatos(newProductos)
    
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
            return <AddProducto agregar ={this.agregarF} agregarFunc = {this.addProductos}/>
        }
        else {
            return <div>

            </div>
        }
    }

    addComentario = (idPlato, comentario) => {
        const newComentario = {
            id: this.props.comentarios + 1 ,
            id_user: 2,
            nombre_user: "Rosemb",
            id_plato: idPlato,
            comentario: comentario,
        }
      
        const comentList = [...this.props.comentarios, newComentario]
  
        this.props.actualizarComent(comentList)
    }

    servicio = ( rol, datos ) =>{
        if(rol === 'ADMIN_ROLE'){
            return <div style={admin}>
                <div className='opciones'>
                    <h3>Bienvenido Admin</h3>
                    <div className="botonesM">
                        <a className="bDesc" href="https://drive.google.com/file/d/190VNnC8JhdfQesbN3-yG-KiEmyhjdcMx/view?usp=sharing">
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
                        key={dato.id} 
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
                    <h3>Bienvenido Usuario</h3>
                    <div className="botonesM">
                        <a className="bDesc" href="https://drive.google.com/file/d/190VNnC8JhdfQesbN3-yG-KiEmyhjdcMx/view?usp=sharing">D</a>
                    </div>
                </div>
                <div className="containerM">
                    {datos.map((dato) => <Producto 
                        dato = {dato} 
                        rol = {rol} 
                        key={dato.id}
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
                        <a className="bDesc" href="https://drive.google.com/file/d/190VNnC8JhdfQesbN3-yG-KiEmyhjdcMx/view?usp=sharing">D</a>
                    </div>
                </div>
                <div className="containerM">
                    {datos.map((dato) => <Producto 
                        dato = {dato} 
                        rol = {rol} 
                        key={dato.id}
                        addC = {this.addComentario}
                        comentariosL = {this.props.comentarios}
                        agregarCarrito = {this.addCompra}
                    />)}
                </div>
            </div>
        }
    }
  
    render(){
        const datos = this.props.datos
        const rol = this.props.rol

        return <div className="bodyM">
            <div className="conTitleM">
                <h1>THE MENU</h1>
            </div>
            {this.servicio(rol, datos)}
        </div>
    }
}

const admin = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}
  
export default Menu;