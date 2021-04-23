import {Link }from "react-router-dom";
import DisplayPlanter from "./DisplayPlanter";
export default function DisplayPlanterList({ planters }) {
  return (
    <div>
      <h3>Displaying all the Planters</h3>
      <ol type="I">
        {planters.map(planter=> 
          <li key={planter.planterId}>
            <Link to={`/planterbyid/${planter.planterId}`}>
              <span>

               Planter Shape is  {planter.planterShape} Cost is Rs {planter.planterCost} Height is 
                {planter.planterHeight}
              </span>
            </Link>
          </li>
        )}
      </ol>
    </div>
  );
}
