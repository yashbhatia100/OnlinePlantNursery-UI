import commonStyle from './commonStyle.module.css';
import DisplayOrderList from "./DisplayOrderList";

export default function GetAllOrder(){

    let order1={
        bookingOrderId: 1,
    transactionMode: "online",
    quantity: 10,
    totalCost: 207,
    planterId: 1
    }
    let order2={
        bookingOrderId: 2,
    transactionMode: "cash",
    quantity: 101,
    totalCost: 2017,
    planterId: 2
    }
    let orderList=[order1,order2]

    const response = {orders: orderList, errMsg: undefined }

    return (
        <div>
            <h3>Get All Order</h3>
            <div className="mt-5">
                <div>
                    <ul>
                        {response.orders ? (
                            <DisplayOrderList orders={response.orders} />
                        ) : ''}
                    </ul>
                </div>
                {response.errMsg ? (
                    <div className={commonStyle.error}>
                        Request cannot be successfull
                        <br />
                        {response.errMsg}
                    </div>
                ) : ''}
            </div>
        </div>
    );
}
