import React, { Component } from 'react'

import '../StyleAdmin/menuAdm.css'
import '../StyleAdmin/StyleGeneral.css'

import AgregarProductos from '../componentExtras/AgregarProductos';
import Modal from '../componentExtras/Modal';

class Productos extends Component {

    state = {
        modalDesc: false,
        editarP: false
    }

    verInformacion = () => {
        this.setState({modalDesc: !this.state.modalDesc})
    }

    editarPlato = () => {
        this.setState({editarP: !this.state.editarP})
        this.verInformacion()
    }

    modalInfo = () => {
        if(this.state.modalDesc){
            return <Modal 
                dato = {this.props.dato} 
                edit = {this.state.editarP}
                estado = {this.state.modalDesc} 
                editPlato = {this.props.editPlato}
                abrirModal = {this.verInformacion} 
                editarPlato = {this.editarPlato}
            />
        }else{
            return <></>
        }
    }

    render(){
        const plato = this.props.dato

        return <>
            <tr key = {plato._id}>
                <td>{plato.nombre}</td>
                <td>{'$'+plato.precio}</td>
                <td>
                    <button className="btnVerAdm" onClick={this.verInformacion}>Ver</button>
                </td>
                <td>
                    <button className="btnMenu menuEdit" onClick={this.editarPlato}>
                        <ion-icon name="create-outline"></ion-icon>
                    </button>
                    <button className="btnMenu menuDel" onClick = {() => this.props.deletePlato(plato._id)}>
                        <ion-icon name="trash-outline"></ion-icon>
                    </button>
                    {this.modalInfo()}
                </td>

            </tr>
        </>
    }

}

export default class Menu extends Component {

    state = {
        modalAddP: false        
    }

    agregarProductoM = () => {
        this.setState({modalAddP: !this.state.modalAddP})
    }

    modal = () => {
        if(this.state.modalAddP){
            return <AgregarProductos 
                agregar = {this.agregarProductoM}
                addPlato = {this.props.addPlato}
            />
        }else{
            return 
        }
    }

    render() {

        this.props.obtenerPlatos()

        return <div className="contentMenuAdmin">
            <div className="headerContentMenu">
                <h2>Platos</h2>
                <button className="iconAddAdmin" onClick={this.agregarProductoM}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                </button>
            </div>
            <div className="listadoDatosAdmin">
                <table>
                    <thead>
                        <tr> 
                            <td>Nombre</td>
                            <td>Precio</td>
                            <td>Descripcion</td>
                            <td>Accion</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.platos.map( plato => {
                            return <Productos 
                                dato = {plato} 
                                key = {plato._id}
                                editPlato = {this.props.editPlato}
                                deletePlato = {this.props.deletePlato}
                            />
                        })}                        
                    </tbody>
                </table>
            </div>
            {this.modal()}
        </div>
    }
}

