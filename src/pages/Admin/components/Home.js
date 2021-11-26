import React, { Component } from 'react'

import '../StyleAdmin/adminS.css'
import '../StyleAdmin/StyleGeneral.css'
import '../StyleAdmin/homeAdmin.css'
import '../../Styles/styleModal.css'

export default class Home extends Component {


    state = {
        abrirModal: true
    }

    isOpenModal = () => {
        this.setState({abrirModal: !this.state.abrirModal})
    }

    openModal = () => {
        if(this.state.abrirModal){
            return <ModalCompras
                isOpenModal = {this.isOpenModal}
                datos = {this.props.comprasRealizadas}
            />
        }
        else{
            return <></>
        }
    }

    render(){

        this.props.obtenerCompra()

        return  <>
            {/* cards */}
            <div className="cardBox">
                <div className="cardAdmin">
                    <div>
                        <div className="numbers">{this.props.totalUsuer}</div>
                        <div className="cardName">User</div>
                    </div>
                    <div className="iconBox">
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                </div>
                <div className="cardAdmin">
                    <div>
                        <div className="numbers">{this.props.totalComentarios}</div>
                        <div className="cardName">Comments</div>
                    </div>
                        <div className="iconBox">
                            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                        </div>
                </div>
                <div className="cardAdmin">
                    <div>
                        <div className="numbers">{this.props.totalPlatos}</div>
                        <div className="cardName">dishes</div>
                    </div>
                    <div className="iconBox">
                        <ion-icon name="fast-food-outline"></ion-icon>
                    </div>
                </div>
                <div className="cardAdmin">
                    <div>
                        <div className="numbers">{this.props.totalReservas}</div>
                        <div className="cardName">reservations</div>
                    </div>
                    <div className="iconBox">
                        <ion-icon name="albums-outline"></ion-icon>
                    </div>
                </div>
            </div>

            {/* details */}
            <div className="detailsAdmin">
                {/* order details list */}
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Recent Orders</h2>
                        <button className="btn" onClick={this.isOpenModal}>View All</button>
                    </div>
                            
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Total</td>
                                <td>Payment</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.comprasRealizadas.length > 0 
                                ? this.props.comprasRealizadas.map( compra => {
                                    return <Compras key={compra._id} compra = {compra}/>
                                })
                                : <Compras compra = {false}/> 
                            }
                        </tbody>
                    </table>
                    
                </div>

                {/* New Customers */}
                <div className="recentCustomers">
                    <div className="cardHeader">
                        <h2>Recent Customers</h2>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td width="60px"><div className="imgBx"><img src="https://i.postimg.cc/13qM1jLP/overwatch-is-cool.png" alt="..."/></div></td>
                                <td><h4>David <br/><span>Italy</span></h4></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {this.openModal()}

            </div>
        </>
    }

}

class Compras extends Component{

    estadoDef = () => {
        if(this.props.compra.estado === 'espera'){
            return "pending"
        }
        else if(this.props.compra.estado === 'entregado'){
            return "delivered"
        }
        else if(this.props.compra.estado === 'en curso'){
            return "inprogress"
        }
        else if(this.props.compra.estado === 'regreso'){
            return "return"
        }
    }

    datoAVer=()=>{
        if(this.props.compra){
            return <tr>
                <td>{this.props.compra.nombre_user ? this.props.compra.nombre_user : 'User54152455' }</td>
                <td>{'$' + (this.props.compra.total_pago ? this.props.compra.total_pago : '00000') }</td>
                <td>{this.props.compra.metodo_pago}</td>
                <td><span className={"status " +  this.estadoDef()}>{this.props.compra.estado}</span></td>
            </tr>
        }
        else{
            return <tr>
                <td>Usuario12500</td>
                <td>$1200</td>
                <td>Paid</td>
                <td><span className="status delivered" >Delivered</span></td>
            </tr>
        }
    }

    render(){
        return <>{this.datoAVer()}</>
    }
}


class ModalCompras extends Component{
    render(){
        return <div className="containerModal modalOpen">
                
            <div className="contAdmiBM">
                <div className="constComprasAdminModal">
                    
                    <div className="btnCerrarModalCompra">
                        <button onClick={this.props.isOpenModal}>
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </button>
                    </div>

                    <div className="contetDatosCompAdmin">
                        {this.props.datos.length > 0 
                            ? this.props.datos.map( compra => {
                                return <CardCompraModal compra = {compra} />
                            })
                            : <CardCompraModal compra = {false}/>
                        }
                    </div>

                </div>
            </div>

        </div>
    }
}


class CardCompraModal extends Component{

    datosAVer = () => {
        if(this.props.compra){
            return <div className="cardCompraModal">
                <div className="datoCompraCrudAdmin">
                    <h3>{this.props.compra.nombre_user}</h3>
                    <h4>{this.props.compra.correo}</h4>
                    <div className="totalMetodoPagoAdmin">
                        <p>{'$' + this.props.compra.total_pago}</p>
                        <p>{this.props.compra.metodo_pago}</p>
                    </div>
                    <p>{this.props.compra.mensaje}</p>
                </div>
                <div className="btnCrudCrompaAdmin">
                    <div className="estadoCompraAdmin">
                        <h4>{this.props.compra.estado}</h4>
                    </div>
                    <div className="botonesCrudAdmin">
                        <button>
                            <ion-icon name="trash-outline"></ion-icon>
                        </button>
                        <button>
                            <ion-icon name="checkmark-done-outline"></ion-icon>
                        </button>
                        <button>
                            <ion-icon name="checkmark-done-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
        }
        else{
            return <div className="cardCompraModal">
    
            </div>
        }
    }

    render(){
        return <>{this.datosAVer()}</>
    }
}