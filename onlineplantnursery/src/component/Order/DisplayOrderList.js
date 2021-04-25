import { Link } from 'react-router-dom';
import DisplayOrder from './DisplayOrder';

export default function DisplayOrderList({orders}) {
    
    return(
        <div>
            <ul className="list-group">
                {
                    orders.map(order=><li key={order.bookingOrderId} className="list-group-item">
                        <Link to={`/orderbyid/${order.bookingOrderId}`}>
                            <span>{order.bookingOrderId} - {order.orderDescription}</span>
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );
}