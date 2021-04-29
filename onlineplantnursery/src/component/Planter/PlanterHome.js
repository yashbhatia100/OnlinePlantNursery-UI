import { Link } from "react-router-dom";
import commonStyle from './commonStyle.module.css';

export default function PlanterHome() {
  return (
    <div>
      <h1 style={{color:'rgb(0, 129, 90)'}}>Planter Module</h1>
      <div>
        <ul className="list-group mt-5" style={{width:'50%', fontSize:'17px'}}>
          <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
            <Link to="/addplanter">
              <span>Add Planter</span>
            </Link>
            <span> - Add a planter to the database</span>
          </li>

          <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
            <Link to="/allplanters">
              <span>Get All Planters</span>
            </Link>
            <span> - Fetch all planters from the database</span>
          </li>

          <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
            <Link to="planterbyidonrequest">
              <span>Get planter details</span>
            </Link>
            <span> - Fetch planter details from the database</span>
          </li>
          <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
            <Link to="/planterbyshape">
              <span>Get planter by Shape</span>
            </Link>
            <span> - Fetch all planters of a particular type</span>
          </li>
          <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
            <Link to="/planterbycost">
              <span>Get planter by Cost </span>
            </Link>
            <span> - Fetch all planters in a cost range</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
