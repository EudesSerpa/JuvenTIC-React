import React, { Component } from 'react'

import Swal from 'sweetalert2';

import '../../Styles/styleModal.css'

import '../StyleAdmin/StyleGeneral.css'
import '../StyleAdmin/reservasSt.css'

export default class Reservas extends Component {

    state = {
        minimixarReservas: false,
        minimixarContacto: false,
        abrirModal: false
    }


    minimixarComp = (mini) => {
        if(mini === "reservas"){
            this.setState({minimixarReservas: !this.state.minimixarReservas})
        }
        else if(mini === "contacto"){
            this.setState({minimixarContacto: !this.state.minimixarContacto})
        }
    }


    render() {
        return (
            <div className="contentMenuAdmin">
                <div className="contectCantidad">
                    <div className="cardTotalRAdmin">

                    </div>
                    <div className="cardTotalRAdmin">
                    
                    </div>
                </div>
                <div className="headerContentMenu">
                    <h2>Reservaciones</h2>
                </div>
                <div className="contestListRCAdmin">
                    <div className="listDatoReservaAdmin" style={{height: this.state.minimixarReservas ? '50px' : '100%'}}> 

                        <div className="btnminadmin">
                            <button onClick={this.minimixarComp.bind(this, "reservas")}>{this.state.minimixarReservas 
                                ? <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                : <ion-icon name="chevron-up-circle-outline"></ion-icon>
                            }</button>
                            <h3>Reservaciones</h3>
                        </div>

                        <div className="contetAdminRC">
                            <div className="headerReservaAdmin generarTableAdmin">
                                <p className="hN">Nombre</p>
                                <p className="hS">Servicio</p>
                                <p className="hT">Correo</p>
                                <p className="hFR">Fecha Reservada</p>
                                <p className="hA">Accion</p>
                            </div>

                            {this.props.reservaciones.length > 0 
                                ?  this.props.reservaciones.map( reserva => {
                                    return <ReservaDato reserva = {reserva} />
                                } )
                                : <ReservaDato reserva = {false}/>
                            }
                            
                        </div>
                        
                    </div>

                    <div className="listDatoReservaAdmin" style={{height: this.state.minimixarContacto ? '50px' : '100%'}}> 
                        
                        <div className="btnminadmin">
                            <button onClick={this.minimixarComp.bind(this, "contacto")}>{this.state.minimixarContacto
                                ? <ion-icon name="chevron-down-circle-outline"></ion-icon>
                                : <ion-icon name="chevron-up-circle-outline"></ion-icon>
                            }</button>
                            <h3>Preguntas</h3>
                        </div>

                        <div className="contetAdminRC">
                            <div className="contetAdminRC">
                                <div className="headerReservaAdmin generarTableAdmin">
                                    <p className="hN">Nombre</p>
                                    <p className="hS">Servicio</p>
                                    <p className="hT">Correo</p>
                                    <p className="hFR">Fecha Reservada</p>
                                    <p className="hA">Accion</p>
                                </div>

                                {this.props.reservaciones.length > 0 
                                    ?  this.props.preguntas.map( pregunta => {
                                        return <ContactoDato pregunta = {pregunta} />
                                    } )
                                    : <ContactoDato pregunta = {false}/>
                                }
                                

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

class ReservaDato extends Component{

    state = {
        abrirModal: false
    }

    openModal = () => {
        this.setState({abrirModal: !this.state.abrirModal})
    }

    modalResCon = () => {
        if( this.state.abrirModal ){
            return <ModalReservas 
                abrirModal = {this.openModal}
                tipoModal = {'Reservas'}
                dato = {this.props.reserva}
            />
        }
        else{
            return <></>
        }
    }

    datosAMostrar = () => {
        if(this.props.reserva){
            return <div className="bodyReservaAdmin generarTableAdmin">
                <p className="hN">Usuarios2002516L</p>
                <p className="hS">Celebracion De Cumpleaños</p>
                <p className="hFR">00/00/0000</p>
                <p className="hT">queTeImporta@gmail.com</p>
                <p className="hA">
                    <button onClick={this.openModal}>Revisar</button>
                </p>
                {this.modalResCon()}
            </div>
        }
        else{
            return <>
                <div className="bodyReservaAdmin generarTableAdmin">
                    <p className="hN">Usuarios2002516L</p>
                    <p className="hS">Celebracion De Cumpleaños</p>
                    <p className="hFR">00/00/0000</p>
                    <p className="hT">queTeImporta@gmail.com</p>
                    <p className="hA">
                        <button onClick={this.openModal}>Revisar</button>
                    </p>
                </div>
                <div className="bodyReservaAdmin generarTableAdmin">
                    <p className="hN">Usuarios2002516L</p>
                    <p className="hS">Celebracion De Cumpleaños</p>
                    <p className="hFR">00/00/0000</p>
                    <p className="hT">queTeImporta@gmail.com</p>
                    <p className="hA">
                        <button onClick={this.openModal}>Revisar</button>
                    </p>
                </div>
                <div className="bodyReservaAdmin generarTableAdmin">
                    <p className="hN">Usuarios2002516L</p>
                    <p className="hS">Celebracion De Cumpleaños</p>
                    <p className="hFR">00/00/0000</p>
                    <p className="hT">queTeImporta@gmail.com</p>
                    <p className="hA">
                        <button onClick={this.openModal}>Revisar</button>
                    </p>
                </div>
                {this.modalResCon()}
            </>
        }
    }

    render(){
        return  <>{this.datosAMostrar()}</>
    }
} 

class ContactoDato extends Component{

    state = {
        abrirModal: false
    }

    openModal = () => {
        this.setState({abrirModal: !this.state.abrirModal})
    }

    modalResCon = () => {
        if( this.state.abrirModal ){
            return <ModalReservas 
                abrirModal = {this.openModal}
                tipoModal = {'Contacto'}
                dato = {this.props.pregunta}
            />
        }
        else{
            return <></>
        }
    }

    datosAMostrar = () => {
        if(this.props.pregunta){
            return <div className="bodyReservaAdmin generarTableAdmin">
                <p className="hN">Usuarios2002516L</p>
                <p className="hS">Celebracion De Cumpleaños</p>
                <p className="hFR">00/00/0000</p>
                <p className="hT">queTeImporta@gmail.com</p>
                <p className="hA">
                    <button onClick={this.openModal}>Revisar</button>
                </p>
                {this.modalResCon()}
            </div>
        }
        else{
            return <>
                <div className="bodyReservaAdmin generarTableAdmin">
                    <p className="hN">Usuarios2002516L</p>
                    <p className="hS">Celebracion De Cumpleaños</p>
                    <p className="hFR">00/00/0000</p>
                    <p className="hT">queTeImporta@gmail.com</p>
                    <p className="hA">
                        <button onClick={this.openModal}>Revisar</button>
                    </p>
                </div>
                <div className="bodyReservaAdmin generarTableAdmin">
                    <p className="hN">Usuarios2002516L</p>
                    <p className="hS">Celebracion De Cumpleaños</p>
                    <p className="hFR">00/00/0000</p>
                    <p className="hT">queTeImporta@gmail.com</p>
                    <p className="hA">
                        <button onClick={this.openModal}>Revisar</button>
                    </p>
                </div>
                <div className="bodyReservaAdmin generarTableAdmin">
                    <p className="hN">Usuarios2002516L</p>
                    <p className="hS">Celebracion De Cumpleaños</p>
                    <p className="hFR">00/00/0000</p>
                    <p className="hT">queTeImporta@gmail.com</p>
                    <p className="hA">
                        <button onClick={this.openModal}>Revisar</button>
                    </p>
                </div>
                {this.modalResCon()}
            </>
        }
    }

    render(){
        return  <>{this.datosAMostrar()}</>
    }
} 

class ModalReservas extends Component {

    state = {
    }

    verModal = () => {
        if(this.props.tipoModal === 'Reservas'){
            return <>
                <div className="btnCerrarModal">
                    <button onClick={this.props.abrirModal}> <ion-icon name="close-circle-outline"></ion-icon> </button>
                </div>
                <div className="contetInfoRevConAdmin">
                    <h2>Nombre Usuario</h2>
                    <p className="correoRevCon"> <span>Correo:</span> <span> test5@gmail.com </span></p>
                    <p className="telefonoRevCon"> <span>Telefono:</span> <span>3255468216</span></p>
                    <h4>Tipo de Servicio Solicitado</h4>
                    <p className="cantidaPerRevCon"><span>Cantidad De Personas</span> <span>8</span></p>
                    <p className="fechaSoliRevCon"> <span>Solicictud Hecha  el</span> <span>25/11/2021</span></p>
                    <p className="fechaReserRevCon"> <span>Fecha Reservada:</span> <span>28/11/2021</span></p>
                    <p className="mensajeRevCon"> <span>mensaje lorem lre m mensaje lorem lre m mensaje lorem lre m mensaje lorem lre m mensaje lorem lre m mensaje lorem lre m</span></p>
                </div>
            </>
        }
        else if(this.props.tipoModal === 'Contacto'){
            return <>
                <div className="btnCerrarModal">
                    <button onClick={this.props.abrirModal}> <ion-icon name="close-circle-outline"></ion-icon> </button>
                </div>
                <div className="contetInfoRevConAdmin">
                    <h2>Nombre Usuario</h2>
                    <p className="correoRevCon"> <span>Correo:</span> <span> test5@gmail.com </span></p>
                    <p className="telefonoRevCon"> <span>Telefono:</span> <span>3255468216</span></p>
                    <h4>Tipo de Servicio Solicitado</h4>
                    <p className="cantidaPerRevCon"><span>Cantidad De Personas</span> <span>8</span></p>
                    <p className="fechaSoliRevCon"> <span>Solicictud Hecha  el</span> <span>25/11/2021</span></p>
                    <p className="fechaReserRevCon"> <span>Fecha Reservada:</span> <span>28/11/2021</span></p>
                    <p className="mensajeRevCon"> <span>mensaje lorem lre m mensaje lorem lre m mensaje lorem lre m mensaje lorem lre m mensaje lorem lre m mensaje lorem lre m</span></p>
                </div>
            </>
        }
    }
    
    render() {
        return <div className="containerModal modalOpen">
                
            <div className="contBM">
                <div className="form modal modalAP">
                    
                    {this.verModal()}

                </div>
            </div>

        </div>
    }
}
