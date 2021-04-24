import "./App.css";
import AddPlanter from "./component/planter/AddPlanter";
import GetAllPlanters from "./component/planter/GetAllPlanters";
import GetPlanterByShape from "./component/planter/GetPlanterByShape";
import GetPlanterById from "./component/planter/GetPlanterById";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./component/planter/Home";
import Navbar from "./component/planter/Navbar";
import GetPlanterByIdRequest from "./component/planter/GetPlanterByIdRequest";
import GetPlanterByCost from "./component/planter/GetPlanterByCost";
//import { fetchPlanterByCost } from "./service/PlanterService";
import {addPlanter,fetchPlanterById,fetchPlanterByShape,fetchPlanterByCost,fetchAll} from "./service/PlanterService";

function App() {

  

  // const promise=PlanterService.addPlanter(mockplanter);
  // promise.then(response=>console.log("inside addPlanter",response.data))
  // .catch(error=>console.log("error in planter add component ",error.message));
        
  // const promise=PlanterService.fetchPlanterById(14);
  // promise.then(response=>console.log("inside fetch Planter By id",response.data))
  // .catch(error=>console.log("error in fetch by id component ",error.message));

  // const promise=PlanterService.fetchPlanterByShape("Cylinderical");
  // promise.then(response=>console.log("inside fetch planter by Shape ",response.data))
  // .catch(error=>console.log("error in planter by Shape ",error.message));

  
  // const promise=PlanterService.fetchAll();
  // promise.then(response=>console.log("inside fetch All ",response.data))
  // .catch(error=>console.log("error in planter fetching All ",error.message));

  const promise=fetchPlanterByCost(200,400);
  promise.then(response=>console.log("inside fetch planter by Cost ",response.data))
  .catch(error=>console.log("error in planter by Cost ",error.message));



  return (
    <div>
      {/*    {
    <Router>
       <Navbar/>
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="row">
            <div className="col-md-9">
              <Switch>
                <Route exact path ="/" component={Home} />
                <Route exact path ="/all" component={GetAllPlanters}/>
                <Route exact path ="/addplanter" component={AddPlanter}/>
                <Route exact path ="/planterbyid/:planterId" component={GetPlanterById}/>
                <Route exact path ="/planterbyidonrequest" component={GetPlanterByIdRequest}/>
                <Route exact path="/planterbyshape" component={GetPlanterByShape}/>
                <Route exact path="/planterbycost" component={GetPlanterByCost}/>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
  }
      */}
    
    </div>
  );
}

export default App;
