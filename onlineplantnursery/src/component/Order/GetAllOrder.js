import { useState } from "react";
import DisplayOrder from "./DisplayOrder";

export default function GetAllOrder(){

    let order1={
        bookingOrderId: 1,
    transactionMode: "online",
    quantity: 10,
    totalCost: 207,
    planterId: 1,
    }
    let order2={
        bookingOrderId: 2,
    transactionMode: "cash",
    quantity: 101,
    totalCost: 2017,
    planterId: 2,
    }
    let orderList=[order1,order2]

    const initialState = {orders:orderList, errMsg:undefined};
    const [currentState, setNewState] = useState(initialState)
    return(
        <div>
            <h3>Get All Orders</h3><br/>
            {currentState.orders?(
                <table className="table table-striped">
                    <tr>
                        <th>bookingOrderId</th>
                        <th>transactionMode</th>
                        <th>quantity</th>
                        <th>totalCost</th>
                        <th>planterId</th>
                    </tr>
                    {currentState.orders.map(order=>
                    <tr>
                        <td>{order.bookingOrderId}</td>
                        <td>{order.transactionMode}</td>
                        <td>{order.quantity}</td>
                        <td>{order.totalCost}</td>
                        <td>{order.planterId}</td>
                    </tr>)}
                </table>
                    ):''}

            
            {currentState.errMsg?(
                <div>
                    {currentState.errMsg}
                </div>
            ):''}
        </div>
    );
}