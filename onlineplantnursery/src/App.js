import "./App.css";
import AddPlanter from "./component/Planter/AddPlanter";
import GetAllPlanters from "./component/Planter/GetAllPlanters";
import GetPlanterByShape from "./component/Planter/GetPlanterByShape";
import GetPlanterById from "./component/Planter/GetPlanterById";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlanterHome from "./component/Planter/PlanterHome";
import Navbar from "./component/Planter/Navbar";
import GetPlanterByIdRequest from "./component/Planter/GetPlanterByIdRequest";
import GetPlanterByCost from "./component/Planter/GetPlanterByCost";
import {addPlanter,fetchPlanter,fetchPlanterByShape,fetchPlanterByCost,fetchAll} from "./service/PlanterService";
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {

  //   const mockplanter = {
  //           planterHeight: 10,planterCapacity: 100,
  //           planterColor: 2,planterDrainageHoles: 1,
  //           planterShape: "Square",
  //           planterStock: 100,
  //           planterCost: 200,
  //           plantId: 1,
  //           seedId: 11,
  //         };
  

  // const promise=addPlanter(mockplanter);
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

  // const promise=fetchPlanterByCost(200,400);
  // promise.then(response=>console.log("inside fetch planter by Cost ",response.data))
  // .catch(error=>console.log("error in planter by Cost ",error.message));



  return (
    <div>
        {
          <Provider store={store}>
    <Router>
       <Navbar/>
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="row">
            <div className="col-md-9">
              <Switch>
                <Route exact path ="/" component={PlanterHome} />
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
      </Provider>
  }
      
    </div>
  );
}

export default App;
