import { Link } from "react-router-dom";
export default function DisplayPlanterList({ planters }) {
  return (
    <div className="mt-5">
      <h3>Displaying fetched Planters</h3>
      <ol type="I">
        {planters.map((planter) => (
          <li key={planter.planterId}>
            <Link to={`/planterbyid/${planter.planterId}`}>
              <span>
                Planter Shape is {planter.planterShape} - Cost is Rs{" "}
                {planter.planterCost} - Height is {planter.planterHeight} cm
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
