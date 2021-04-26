import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddSeed from './component/seed/AddSeed';
import GetAllSeeds from './component/seed/GetAllSeeds';
import GetSeedByIdRequest from './component/seed/GetSeedByIdRequest';
import GetAllSeedsByType from './component/seed/GetAllSeedsByType';
import GetSeedById from './component/seed/GetSeedById';
import Navbar from './component/seed/Navbar';
import { Provider } from "react-redux";
import store from "./redux/store";
import {addSeed, fetchAllSeeds, fetchSeedById, fetchSeedsByType} from './service/SeedService';

function App() {
 /*
 let seed={
  seedId:300,
  commonName:"xyz seed",
  bloomTime:30, 
  watering:"Sprinkle",
  difficultyLevel:"easy", 
  temparature:25, 
  typeOfSeeds:"Round", 
  seedsDescription:"Black colored seeds", 
  seedsStock:30, 
  seedsCost:100, 
  seedsPerPacket:20
}

const promise = addSeed(seed);
promise.then(response=>console.log("Inside response", response.data))
.catch(error=>console.log("Inside error", error.message));


const promise = fetchSeedById(3);
promise.then(response=>console.log("Inside response",response.data))
.catch(error=>console.log("Inside error ", error.message));

const promise=fetchAllSeeds();
promise.then(response=>console.log("inside fetch All ",response.data))
.catch(error=>console.log("Inside error ",error.message));

const promise=fetchSeedsByType("Round");
promise.then(response=>console.log("inside fetch All ",response.data))
.catch(error=>console.log("Inside error ",error.message));
 
*/

 return (
    <div >{
      
      <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container mt-5" style={{ marginTop: '50px' }}>
          <div className="row">

            <div className="col-md-9">
        <Switch>
          <Route exact path="/addseed" component={AddSeed} />
          <Route exact path="/seedbyid/:seedId" component={GetSeedById} />
          <Route exact path="/seedbyidonrequest" component={GetSeedByIdRequest} /> 
          <Route exact path="/allseeds" component={GetAllSeeds} />
          <Route exact path="/seedsbytype" component={GetAllSeedsByType} />
                  
         
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
