import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                <span>Home </span>
                <span className="sr-only">(current)</span>
              </Link>
            </li>

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
              <Link to="/planterbyid/:planterId" className="nav-link">
                <span>Get planter details</span>
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
          </ul>
        </div>
      </nav>
    </div>
  );
}