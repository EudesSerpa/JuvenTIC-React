import React, { Component } from 'react'

import '../StyleAdmin/servicioStyle.css'
import '../StyleAdmin/StyleGeneral.css'

import ModalServicio from '../componentExtras/ModalServicio'
import AgregarServicio from '../componentExtras/AgregarServicio'

class Servicio extends Component{

    state = {
        editarServ: false
    }


    abrirEdit = () => {
        this.setState({editarServ: !this.state.editarServ})
    }

    modalAbierto = () => {
        if(this.state.editarServ){
            return <ModalServicio
                dato = {this.props.servicio}
                estado = {this.state.editarServ}
                editServ = {this.state.editarServ}
                editServicio = {this.abrirEdit}
            />
        }
        else {
            return <></>
        }
    }

    renderservicio = () => {
        if(this.props.servicio){
            return <div className="cardServiceAdmin">
                    <div className="btnServAdmin">
                        <button className="btnMenu menuEdit" onClick={ this.abrirEdit } >
                            <ion-icon name="create-outline"></ion-icon>
                        </button>
                        <button className="btnMenu menuDel" onClick={ () => console.log('Servicio eliminado') } >
                            <ion-icon name="trash-outline"></ion-icon>
                        </button>
                    </div>
                    <div className="infoServAdmin">
                        <div className="imagenServAdm">
                            <img src={this.props.servicio.imgURL} />
                        </div>
                        <div className="infTextServAdm">
                            <h2>{this.props.servicio.nombre}</h2>
                            <p>{this.props.servicio.descripcion}</p>
                        </div>
                    </div>

                    {this.modalAbierto()}

                </div>
        }
        else{
            return <div className="cardServiceAdmin">
                    <div className="btnServAdmin">
                        <button className="btnMenu menuEdit" >
                            <ion-icon name="create-outline"></ion-icon>
                        </button>
                        <button className="btnMenu menuDel" >
                            <ion-icon name="trash-outline"></ion-icon>
                        </button>
                    </div>
                    <div className="infoServAdmin">
                        <div className="imagenServAdm">
                            <img src="https://res.cloudinary.com/universidad-de-cartagena/image/upload/v1632686860/hamburger-1238246__340_j4cd0d.jpg" />
                        </div>
                        <div className="infTextServAdm">
                            <h2> Tipo servicio </h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
                        </div>
                    </div>
                </div>
        }
    }

    render(){
        return <>{this.renderservicio()}</>
    }
}


export default class Servicios extends Component {

    state = {
        agregarServ: false
    }

    openModal = () => {
        this.setState({agregarServ: !this.state.agregarServ})
    }

    abrirModal = () => {
        if(this.state.agregarServ){
            return <AgregarServicio 
                agregar = {this.openModal}
            />
        }
        else{
            return <></>
        }
    }

    render() {
        return <div className="contentMenuAdmin">
            <div className="headerContentMenu">
                <h2>Servicios</h2>
                <button className="iconAddAdmin" onClick={this.openModal}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                </button>
            </div>
            <div className="listServiceAdmin">

                {this.props.servicios.map( servicio => {
                    return <Servicio
                        servicio = {servicio}
                    />
                } )}

            </div>

            {this.abrirModal()}

        </div>
    }
}
