import React, { Component } from 'react'

import '../StyleAdmin/StyleGeneral.css'
import '../StyleAdmin/reservasSt.css'

export default class Reservas extends Component {

    state = {
        minimixarReservas: false,
        minimixarContacto: false
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
                    <div className="listDatoReservaAdmin" style={{height: this.state.minimixarReservas ? '50px' : '500px'}}> 

                        <div className="btnminadmin">
                            <button onClick={this.minimixarComp.bind(this, "reservas")}>{this.state.minimixarReservas ? '+' : '-'}</button>
                            <h3>Reservaciones</h3>
                        </div>

                        <div className="contetAdminRC">
                            <div className="headerReservaAdmin">
                                <p className="hN">Nombre</p>
                                <p className="hS">Servicio</p>
                                <p className="hT">Telefono</p>
                                <p className="hFR">Fecha Reservada</p>
                                <p className="hA">Accion</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="listDatoReservaAdmin" style={{height: this.state.minimixarContacto ? '50px' : '500px'}}> 
                        
                        <div className="btnminadmin">
                            <button onClick={this.minimixarComp.bind(this, "contacto")}>{this.state.minimixarContacto ? '+' : '-'}</button>
                            <h3>Preguntas</h3>
                        </div>

                        <div className="contetAdminRC"></div>

                    </div>
                </div>
            </div>
        )
    }
}

class ReservaDato extends Component{
    render(){
        return  <tr>
            <td></td>
            <td>usuario</td>
            <td></td>
            <td>
                <button className="btnVerAdm" >Ver</button>
            </td>
            <td>
                <button className="btnVerAdm" >Revisar</button>
            </td>

            

        </tr>
    }
} 

class ContactoDato extends Component{
    render(){
        return  <tr>
            <td></td>
            <td>usuario</td>
            <td></td>
            <td>
                <button className="btnVerAdm" >Ver</button>
            </td>
            <td>
                <button className="btnVerAdm" >Revisar</button>
            </td>

            

        </tr>
    }
} 