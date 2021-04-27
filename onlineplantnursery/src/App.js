
import './App.css';
import AddPlant from './component/plant/AddPlant';
import GetAllPlants from './component/plant/GetAllPlants';
import GetPlantByName from './component/plant/GetPlantByName';
import GetPlantByNameRequest from './component/plant/GetPlantByNameRequest';
import GetPlantToUpdate from './component/plant/GetPlantToUpdate';
import plantHome from './component/plant/plantHome';
import GetAllPlantsByType from './component/plant/GetAllPlantsByType';

import AddPlanter from "./component/Planter/AddPlanter";
import GetAllPlanters from "./component/Planter/GetAllPlanters";
import GetPlanterByShape from "./component/Planter/GetPlanterByShape";
import GetPlanterById from "./component/Planter/GetPlanterById";
import PlanterHome from "./component/Planter/PlanterHome";
import GetPlanterByIdRequest from "./component/Planter/GetPlanterByIdRequest";
import GetPlanterByCost from "./component/Planter/GetPlanterByCost";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import Navbar from './component/Navbar';

function App() {

  return (
    <div>
      <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container mt-5">
        <Switch>
          <Route exact path="/planthome" component={plantHome} />
          <Route exact path="/allplants" component={GetAllPlants} />
          <Route exact path="/addplant" component={AddPlant} />
          <Route exact path="/plantbyname/:name" component={GetPlantByName} />
          <Route exact path="/plantbynameonrequest" component={GetPlantByNameRequest} />
          <Route exact path="/plantsbytype" component={GetAllPlantsByType} />
          <Route exact path="/planttoupdate" component={GetPlantToUpdate} />
          <Route exact path ="/planterhome" component={PlanterHome} />
          <Route exact path ="/allplanters" component={GetAllPlanters}/>
          <Route exact path ="/addplanter" component={AddPlanter}/>
          <Route exact path ="/planterbyid/:planterId" component={GetPlanterById}/>
          <Route exact path ="/planterbyidonrequest" component={GetPlanterByIdRequest}/>
          <Route exact path="/planterbyshape" component={GetPlanterByShape}/>
          <Route exact path="/planterbycost" component={GetPlanterByCost}/>
        </Switch>
        </div>
      </Router>
      </Provider>
      
    </div>
  );
}

export default App;
