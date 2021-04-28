import { Link } from 'react-router-dom';


export default function DisplayOrderList({orders}) {
    
    return(
        <div>
            <ul className="list-group">
                {
                    orders.map(order=><li key={order.bookingOrderId} className="list-group-item">
                        <Link to={`/orderbyid/${order.bookingOrderId}`}>
                            <span>Order ID is {order.bookingOrderId} quantity is {order.quantity} </span>
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );
}