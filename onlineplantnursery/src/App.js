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

function App() {
/*
let mockPlant={
  plantHeight: 100,
  plantSpread: "2m",
  commonName: "Rose",
  bloomTime: "2 months",
  plantUse: "decoration",
  difficultyLevel: "easy",
  temperature: "25 deg",
  typeOfPlant: "herb",
  plantDescription: "red flowers",
  plantStock: 10,
  plantCost: 50
}

let mockUpdate = {
    plantId:1,
    plantStock: 25 
}

const promise = addPlant(mockPlant);
promise.then(response=>console.log("Inside response body", response.data))
.catch(error=>console.log("Inside error", error.message));


const promise = getPlantByName("Sunflower")
promise.then(response=>console.log("Success: ",response.data))
.catch(error=>console.log("Faliure: ", error.message));


const promise = getPlantsByType("Herb")
promise.then(response=>console.log("Success: ",response.data))
.catch(error=>console.log("Faliure: ", error.message));


const promise = getAllPlants()
promise.then(response=>console.log("Success: ",response.data))
.catch(error=>console.log("Faliure: ", error.message));


const promise = updateStock(mockUpdate)
promise.then(response=>console.log("Success: ",response.data))
.catch(error=>console.log("Faliure: ", error.message));
*/

  return (
    <div>
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
          <Route exact path="/updatestock/:id" component={UpdatePlantStock} />
        </Switch>
        </div>
      </Router>
     
    </div>
  );
}

export default App;
