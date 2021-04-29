import { Link } from "react-router-dom";

export default function customerHome(){
    return(
        <div>
           <div> <h1> Welcome to Online Plant Nursery</h1></div>
            <h3>Customer Module</h3>
            <div>
                <ul className="list-group mt-5">
                    <li className="list-group-item bg-light mb-4 border-0">
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                    </li>
                    <li className="list-group-item bg-light mb-4 border-0">
                        <Link to="/addcustomer" className="nav-link">
                            Add Customer
                        </Link>
                    </li>
                    <li className="list-group-item bg-light mb-4 border-0">
                    <Link to="/getcustomerbyid/:id" className="nav-link">
                        Get Customer By ID
                    </Link>
                    </li>
                    <li className="list-group-item bg-light mb-4 border-0">
                    <Link to="/getcustomerdetailsonrequest" className="nav-link">
                        Get Customer Details On Request
                    </Link>
                    </li>
                    <li className="list-group-item bg-light mb-4 border-0">
                    <Link to="/changecustomername" className="nav-link">
                        Change Customer Name
                    </Link>
                    </li>
                    <li className="list-group-item bg-light mb-4 border-0">
                    <Link to="/getallcustomers" className="nav-link">
                        Get All Customers
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}