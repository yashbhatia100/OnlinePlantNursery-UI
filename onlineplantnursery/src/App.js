import "./App.css";
import AddPlanter from "./component/Planter/AddPlanter";
import DisplayPlanter from "./component/Planter/DisplayPlanter";
import DisplayPlanters from "./component/Planter/DisplayPlanters";
import GetAllPlanters from "./component/Planter/GetAllPlanters";
import GetPlanterDetails from "./component/Planter/GetPlanterDetails";
import UpdatePlanterStock from "./component/Planter/UpdatePlanterStock";

function App() {
  const planter1 = {
    id: 1,
    planterHeight: 10,
    planterCapacity: 100,
    planterColor: 2,
    planterDrainageHoles: 1,
    planterShape: "Square",
    planterStock: 100,
    planterCost: 200,
    plantId: 1,
    seedId: 1,
  };
  const planter2 = {
    id: 2,
    planterHeight: 10,
    planterCapacity: 100,
    planterColor: 2,
    planterDrainageHoles: 1,
    planterShape: "Square",
    planterStock: 100,
    planterCost: 200,
    plantId: 1,
    seedId: 1,
  };

  const planters = [planter1, planter2];

  return (
    <div>
      <GetPlanterDetails />

      <UpdatePlanterStock />
      {/*  <DisplayPlanters planters={planters}/> */}

      <AddPlanter />
      <GetAllPlanters />

      <DisplayPlanter planter={planter1} />
    </div>
  );
}

export default App;
