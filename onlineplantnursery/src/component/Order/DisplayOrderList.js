
import { Link } from 'react-router-dom';

export default function DisplayOrderList({ orders }) {

    console.log("inside Display order lsit", orders);
    return (
        <div>

            <ul>

                {
                    orders.map((order) => <li key={order.bookingOrderId}>

                       <Link to={`/displayorder/${order.bookingOrderId}`} >
                       <span>bookingOrderID is {order.bookingOrderId} <br/>
                       transactionMode is {order.transactionMode} <br/>
                       quantity is {order.quantity} <br/>
                       Order date is {order.orderDate}<br/>
                       

                       </span>
                       
                       </Link>

                    </li>)
                }
            </ul>


        </div>

    )

}