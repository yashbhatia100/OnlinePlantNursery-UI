import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddSeed from './component/seed/AddSeed';
import GetAllSeeds from './component/seed/GetAllSeeds';
import GetSeedByIdRequest from './component/seed/GetSeedByIdRequest';
import GetAllSeedsByType from './component/seed/GetAllSeedsByType';
import GetSeedById from './component/seed/GetSeedById';
import Navbar from './component/seed/Navbar';
import home from './component/seed/Home';

function App() {
 // let str=tempurature+"";
 
 return (
    <div >
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
      {/*<DisplaySeedDetails seed={seed}/>*/}
      {/*<GetSeedById />*/}
      {/*<AddSeed />*/}
      {/*<DisplaySeedList seeds={seeds} />*/}
      {/*<GetAllSeeds />*/}
      
    </div>
  );
}

export default App;
