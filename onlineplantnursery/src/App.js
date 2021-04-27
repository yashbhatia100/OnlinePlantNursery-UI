import "./App.css";
import AddPlanter from "./component/Planter/AddPlanter";
import GetAllPlanters from "./component/Planter/GetAllPlanters";
import GetPlanterByShape from "./component/Planter/GetPlanterByShape";
import GetPlanterById from "./component/Planter/GetPlanterById";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlanterHome from "./component/Planter/PlanterHome";
import Navbar from "./component/Navbar";
import GetPlanterByIdRequest from "./component/Planter/GetPlanterByIdRequest";
import GetPlanterByCost from "./component/Planter/GetPlanterByCost";
import {addPlanter,fetchPlanter,fetchPlanterByShape,fetchPlanterByCost,fetchAll} from "./service/PlanterService";
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {

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
                <Route exact path ="/planterhome" component={PlanterHome} />
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
