import { Link } from "react-router-dom";

export default function PlanterHome() {
  return (
    <div>
      <h3>Online Plant Nursery</h3>
      This is the Planter Module
      <div>
        <ul className="list-group mt-5">
          <li className="list-group-item bg-light mb-4 border-0">
            <Link to="/addplanter" className="nav-link">
              <span>Add Planter</span>
            </Link>
          </li>

          <li className="list-group-item bg-light mb-4 border-0">
            <Link to="/allplanters" className="nav-link">
              <span>Get All Planters</span>
            </Link>
          </li>

          <li className="list-group-item bg-light mb-4 border-0">
            <Link to="planterbyidonrequest" className="nav-link">
              <span>Get planter details on Request</span>
            </Link>
          </li>
          <li className="list-group-item bg-light mb-4 border-0">
            <Link to="/planterbyshape" className="nav-link">
              <span>Get planter by Shape on Request</span>
            </Link>
          </li>
          <li className="list-group-item bg-light mb-4 border-0">
            <Link to="/planterbycost" className="nav-link">
              <span>Get planter by Cost </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
