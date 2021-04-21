import './App.css';
import AddOrder from './component/Order/AddOrder';
import GetAllOrder from './component/Order/GetAllOrder';
import GetOrderById from './component/Order/GetOrderById';

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
      <h1>Order Module Module</h1>
      <AddOrder />
      <br/><hr/><br/>
      <GetOrderById />
      <br/><hr/><br/>
      <GetAllOrder />
      </div>
  );
}

export default App;