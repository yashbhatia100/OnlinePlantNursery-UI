import './App.css';
import AddPlant from './component/plant/AddPlant';
import GetAllPlants from './component/plant/GetAllPlants';
import GetPlantByName from './component/plant/GetPlantByName';
import GetPlantByNameRequest from './component/plant/GetPlantByNameRequest';
import GetPlantToUpdate from './component/plant/GetPlantToUpdate';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './component/plant/Navbar';
import home from './component/plant/home';
import GetAllPlantsByType from './component/plant/GetAllPlantsByType';
import UpdatePlantStock from './component/plant/UpdatePlantStock';
import {addPlant, getPlantByName, getPlantsByType, getAllPlants, updateStock} from './service/PlantService';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {

  return (
    <div>
      <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/all" component={GetAllPlants} />
          <Route exact path="/addplant" component={AddPlant} />
          <Route exact path="/plantbyname/:name" component={GetPlantByName} />
          <Route exact path="/plantbynameonrequest" component={GetPlantByNameRequest} />
          <Route exact path="/plantsbytype" component={GetAllPlantsByType} />
          <Route exact path="/planttoupdate" component={GetPlantToUpdate} />
        </Switch>
        </div>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
