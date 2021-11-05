import React, { useContext, useEffect, Component } from 'react'
import NavBar from '../../Components/NavBar/index';
import RealizarComprar from './RealizarComprar'
import AuthContext from '../../Context/autenticacion/authContext';

import '../Styles/carritoS.css'

import compras from '../../samples/compras.json'

class CarritoClass extends Component {

    updateTotal = () => {
        var suma = 0
        suma = this.props.compras.map(compra => {
            return parseInt(compra.cantidad * compra.precio)
        })
        let x = 0
        for(let i = 0; i < suma.length; i++){
            x += suma[i]
        }
        /*this.setState({total: x})*/
        return x
    }

    state = {
        total: 0,
        cantindad: 0,
        showFactura: true,
        showDetalles: true,
        comprar: false
    }

    restablecerState = () => {
        this.setState({
            c: 0, 
            total: 0,
            cantindad: 0
        })
    }

    cantidadF = (valor) => {
        this.setState({cantindad: valor})
    }

    doCompra = () => {
        this.setState({comprar: !this.state.comprar})
    }

    doShowDetalles = () => {
        this.setState({showDetalles: !this.state.showDetalles})
    }

    doShowFactura = () => {
        this.setState({showFactura: !this.state.showFactura})
    }

    stylelistCompras = () => {
        return {
            width: this.state.showDetalles ? '75%' : '150px',
            height: this.state.showDetalles ? '75vh' : '90px' 
        }
    }

    stylelistC = () => {
        return {
            opacity: this.state.showDetalles ? '1' : '0',
            visibility: this.state.showDetalles ? 'visible' : 'hidden'
        }
    }

    styleFacture = () => {
        return {
            height: this.state.showFactura ? '78%' : '60px' 
        }
    }

    styleFactureC = () => {
        return {
            opacity: this.state.showFactura ? '1' : '0',
            visibility: this.state.showFactura ? 'visible' : 'hidden',
            height: this.state.showFactura ? '45vh' : '0px'
        }
    }

    stylefacturaCompra = () => {
        return {
            height: this.state.showFactura ? '75vh' : '162px'
        }
    }

    vaciarCarrito = () => {
        this.restablecerState()
        //this.props.actualizarCompras([])
    }

    updateCantidad = (id, valor) => {
        const newCompra = this.props.compras.map(compra => {
            if(compra.id === id){
                return {
                    ...compra,
                    cantidad: (compra.cantidad + valor <= 0) ? 0 : (compra.cantidad + valor)
                }
            }
            return compra
        })

        //this.props.actualizarCompras(newCompra)
    }

    deleteCompra = (id) => {
        const newCompra = this.props.compras.filter(compra => compra.id !== id)
        //this.props.actualizarCompras(newCompra)
    }

    realizarCompra = ( ) => {
        if(this.state.comprar){
            return <RealizarComprar doCompra = {this.doCompra} usuario = {this.props.usuario}/>
        }
        else{
            return <div>

            </div>
        }
    }

    rederProductos = () => {
        if(this.props.compras.length > 0 ){
            return this.props.compras.map(compra => {
                return <div className="datosTable" key={compra.id}>
                    <p className="nombre N">{compra.nombrePlto}</p> 
                    <p className="cantidad">{compra.cantidad}</p>
                    <p className="total">{'$'+(compra.precio*compra.cantidad)}</p>
                    <p className="accion">
                        <button className="bMas" onClick={this.updateCantidad.bind(this, compra.id, 1)}>+</button>
                        <button className="bMenos" onClick={this.updateCantidad.bind(this, compra.id, -1)}>-</button>
                        <button className="bDel" onClick={this.deleteCompra.bind(this, compra.id)}>X</button>
                    </p>
                </div>
            })
        }
    }

    rederDetalles = () => {
        if(this.props.compras.length > 0 ){
            return this.props.compras.map(compra => {
                return <div className="detallesBody" key={compra.id}>
                    <p className="bodyN HD">{compra.nombrePlto}</p>
                    <p className="bodyP HD">{compra.precio}</p>
                </div>
            })
        }
    }

    render() {
        return <div className="bodyCarrito">
            <h1>CARRITO</h1>
            <div className="contentCarrito">
                <div className="facturaCompra" style={this.stylefacturaCompra()}>
                    <div className="buttonShowF">
                        <button onClick={this.doShowFactura}>{this.state.showFactura ? '-' : '+'}</button>
                    </div>
                    <div className="factura" style={this.styleFacture()}>
                        <div className="contFactura" style={this.styleFactureC()}>
                            <h2>Factura</h2>
                            <div className="detallesCF">
                                <div className="detallesHeader">
                                    <h4 className="HeaderN HD">Nombre</h4>
                                    <h4 className="HeaderP HD">Precio U.</h4>
                                </div>
                                {this.rederDetalles()}
                            </div>
                        </div>
                        <div className="totalFactura">
                            <p>TOTAL:</p>
                            <span>{'$' + this.updateTotal()}</span>
                        </div>                        
                    </div>
                    {this.realizarCompra()}
                    <div className="contentBotonC">
                        <button className="botonComprar" onClick={this.doCompra}>Comprar</button>
                    </div>
                </div>
                <div className="listCompras" style={this.stylelistCompras()}>
                    <div className="buttonShowF">
                        <button onClick={this.doShowDetalles}>{this.state.showDetalles ? '-' : '+'}</button>
                    </div>
                    <div className="listComprasCont" style={this.stylelistC()}>
                        <div className="headTable">
                            <p className="nombre G">Nombre</p> 
                            <p className="cantidad G">Cantidad</p>
                            <p className="total G">Total</p>
                            <p className="accion G">Accion</p>
                        </div>
                        {this.rederProductos()}
                    </div>
                    <div className="botonVaciar" style={{marginTop: this.state.showDetalles ? '10px' : '0'}}>
                        <button onClick={this.vaciarCarrito}>VACIAR</button>
                    </div>
                </div>
            </div>
        </div>
    }
}


export default function Carrito(){

    const authContext = useContext(AuthContext);
    const {usuario, usuarioAutenticado} = authContext;

    useEffect(()=>{
        // Es asincrono? El nombre no aparece en la 1° ejecucion per se
        usuarioAutenticado();
    }, [])

    return <>
        <NavBar/>
        <CarritoClass compras={compras} usuario = {usuario ? usuario : null}/>
    </>
}