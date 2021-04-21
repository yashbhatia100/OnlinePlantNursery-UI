import './App.css';
import AddPlant from './component/plant/AddPlant';
import GetAllPlants from './component/plant/GetAllPlants';
import GetPlantByName from './component/plant/GetPlantByName';

function App() {
/*
  let mockPlant={
    plantHeight:100, 
    plantSpread:"2m", 
    commonName:"Rose", 
    bloomTime:"2 months",
    plantUse:"decoration",
    difficultyLevel:"easy",
    temperature:"25 deg",
    typeOfPlant:"herb",
    plantDescription:"red flowers",
    plantStock:10,
    plantCost:50
  }
*/
  return (
    <div class="container">
      <h1>Plant Module</h1>
      <AddPlant />
      <br/><hr/><br/>
      <GetPlantByName />
      <br/><hr/><br/>
      <GetAllPlants />
    </div>
  );
}

export default App;
