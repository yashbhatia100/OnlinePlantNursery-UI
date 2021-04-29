import { Link } from "react-router-dom";

export default function orderHome(){
    return(
        <div>
            <h1>Online Plant Nursery</h1>
            <h3>Order Module</h3>
            <ul className="list-group mt-5">
                    <li className="list-group-item bg-light mb-4 border-0">
                        <Link to="/all" >
                            Get All order
                        </Link>
                    </li>
                    <li className="list-group-item bg-light mb-4 border-0">
                        <Link to="/addorder">
                            Add Order
                        </Link>
                    </li>
                    <li className="list-group-item bg-light mb-4 border-0">
                        <Link to="/getorderbyidonrequest">
                            GetOrderByIdOnRequest
                        </Link>
                    </li>
                    
                </ul>
        </div>
    );
}