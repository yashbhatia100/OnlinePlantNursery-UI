import React, { useState } from "react";
import DisplayOrder from "./DisplayOrder";
import commonStyle from './commonStyle.module.css';
import DisplayOrder from "./DisplayOrder";

export default function GetOrderById(props){

    let mockOrder={
        bookingOrderId: 1,
        transactionMode: "online",
        quantity: 10,
        totalCost: 207,
        planterId: 1,
    }
    
    const response = {order:mockOrder, errMsg:undefined};

    //const [currentState, setNewState]=useState({name:undefined});

    return(
        <div>
            <h3>Order Details</h3>
            <div className="mt-5">
            {response.order?(
                <div>
                    <div>
                        <DisplayOrder order={response.order}/>
                    </div>
                </div>
            ):''}

            {response.errMsg?(
                <div className={commonStyle.error}>
                    Request cannot be processed
                    <br/>
                    {response.errMsg}
                </div>
            ):''}
            </div>
        </div>
    );
}