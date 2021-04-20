import "./App.css";
import AddPlanter from "./component/Planter/AddPlanter";
import DisplayPlanter from "./component/Planter/DisplayPlanter";
import DisplayPlanters from "./component/Planter/DisplayPlanters";
import GetPlanterDetails from "./component/Planter/GetPlanterDetails";

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

const planters=[planter1,planter2];

  return (
    <div>
      <h2>Welcome To Online Plant Nursery</h2>
      
      {/*<DisplayPlanter planter={planter1} />*/}
      <GetPlanterDetails/>
       {/*<AddPlanter/>*/}
    
       {/* <DisplayPlanters planters={planters}/>*/}
      
     
    </div>
  );
}

export default App;
