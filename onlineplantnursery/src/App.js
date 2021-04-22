import './App.css';
import AddPlant from './component/plant/AddPlant';
import GetAllPlants from './component/plant/GetAllPlants';
import GetPlantByName from './component/plant/GetPlantByName';
import GetPlantByNameRequest from './component/plant/GetPlantByNameRequest'
import UpdatePlantStock from './component/plant/UpdatePlantStock';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navbar from './component/plant/Navbar';
import home from './component/plant/home';
import GetAllPlantsByType from './component/plant/GetAllPlantsByType';

function App() {

  return (
    <div className="container">
      <Router>
        <Navbar />
        <div className="mt-5">
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/all" component={GetAllPlants} />
          <Route exact path="/addplant" component={AddPlant} />
          <Route exact path="/plantbyname/:name" component={GetPlantByName} />
          <Route exact path="/plantbynameonrequest" component={GetPlantByNameRequest} />
          <Route exact path="/plantsbytype" component={GetAllPlantsByType} />
        </Switch>
        </div>
      </Router>
     
    </div>
  );
}

export default App;
