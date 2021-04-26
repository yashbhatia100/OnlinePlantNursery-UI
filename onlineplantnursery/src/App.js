import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddSeed from './component/seed/AddSeed';
import GetAllSeeds from './component/seed/GetAllSeeds';
import GetAllSeedsByType from './component/seed/GetAllSeedsByType';
import GetSeedById from './component/seed/GetSeedById';
import GetSeedByName from './component/seed/GetSeedByName';
import Navbar from './component/seed/Navbar';
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
 
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
          <Route exact path="/seedbyname/:commonName" component={GetSeedByName} />
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
