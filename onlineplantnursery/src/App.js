import "./App.css";
import AddPlanter from "./component/planter/AddPlanter";
import GetAllPlanters from "./component/planter/GetAllPlanters";
import GetPlanterByShape from "./component/planter/GetPlanterByShape";
import GetPlanterById from "./component/planter/GetPlanterById";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlanterHome from "./component/planter/PlanterHome";
import Navbar from "./component/Navbar";
import GetPlanterByIdRequest from "./component/planter/GetPlanterByIdRequest";
import GetPlanterByCost from "./component/planter/GetPlanterByCost";

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
