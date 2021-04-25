import {Link} from 'react-router-dom';

export default function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">
                    Order Module
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/all" className="nav-link">
                                Get All Orders
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addorder" className="nav-link">
                                Add Order
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/orderbyid/bookingOrderId:" className="nav-link">
                                Get Order By bookingOrderId
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/orderbyidonrequest" className="nav-link">
                                Get Order By Id On Request
                            </Link>
                        </li>
                        
                        
                    </ul>
                </div>
            </nav>
        </div>
    );

}