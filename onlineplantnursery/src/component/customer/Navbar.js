import { Link } from 'react-router-dom';

export default function Navbar(){

   return(
      <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <Link to ="/" className="navbar-brand">
       Customer Module
       </Link>
       
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
       <span className="navbar-toggler-icon"></span>
   </button>
       
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
   <ul className="navbar-nav mr-auto">
       <li className="nav-item">
           <Link to="/login" className="nav-link">
               Login
           </Link>
       </li>
       <li className="nav-item">
           <Link to="/addcustomer" className="nav-link">
               Add Customer
           </Link>
       </li>
       <li className="nav-item">
       <Link to="/getcustomer" className="nav-link">
           Get Customer
       </Link>
       </li>
       <li className="nav-item">
       <Link to="/getcustomerdetailsonrequest" className="nav-link">
           Get Customer Details On Request
       </Link>
       <li className="nav-item">
       <Link to="/changecustomername" className="nav-link">
           Change Customer Name
       </Link>
       </li>
   </li>
   </ul>
   </div>
       </nav>
      </div>

   ) ;

}