import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

         
              <Link to="/"className="navbar-brand">
                Planter Module
                
              </Link>

              
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
              <Link to="/addplanter" className="nav-link">
                <span>Add Planter</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/all" className="nav-link">
                <span>Get All Planters</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="planterbyidonrequest" className="nav-link">
                <span>Get planter details on Request</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/planterbyshape" className="nav-link">
                <span>Get planter by Shape on Request</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/planterbycost" className="nav-link">
                <span>Get planter by Cost </span>
              </Link>
            </li>
         
       </ul>
       </div>
      </nav>
    </div>
  );
}
