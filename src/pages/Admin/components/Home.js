import React from 'react'

import '../StyleAdmin/adminS.css'
import '../StyleAdmin/StyleGeneral.css'

export default function Home(props) {
    return  <>
        {/* cards */}
        <div className="cardBox">
            <div className="cardAdmin">
                <div>
                    <div className="numbers">{props.totalUsuer}</div>
                    <div className="cardName">User</div>
                </div>
                <div className="iconBox">
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
            <div className="cardAdmin">
                <div>
                    <div className="numbers">{props.totalComentarios}</div>
                    <div className="cardName">Comments</div>
                </div>
                    <div className="iconBox">
                        <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                    </div>
            </div>
            <div className="cardAdmin">
                <div>
                    <div className="numbers">{props.totalPlatos}</div>
                    <div className="cardName">dishes</div>
                </div>
                <div className="iconBox">
                    <ion-icon name="fast-food-outline"></ion-icon>
                </div>
            </div>
            <div className="cardAdmin">
                <div>
                    <div className="numbers">{props.totalReservas}</div>
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
                        <tr>
                            <td>Usuario12500</td>
                            <td>$1200</td>
                            <td>Paid</td>
                            <td><span className="status delivered">Delivered</span></td>
                        </tr>
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

        </div>
    </>

}
