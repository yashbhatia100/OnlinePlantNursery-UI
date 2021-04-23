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

function App() {
  
  return (
    <div>
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
    </div>
  );
}

export default App;
