import React, { Component } from 'react'

import '../StyleAdmin/adminS.css'
import '../StyleAdmin/StyleGeneral.css'
import '../StyleAdmin/homeAdmin.css'
import '../../Styles/styleModal.css'

export default class Home extends Component {
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
                        <a href="#" className="btn">View All</a>
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
                    <ModalCompras/>
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
                        <button>
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </button>
                    </div>

                    <div className="contetDatosCAdmin"></div>

                </div>
            </div>

        </div>
    }
}