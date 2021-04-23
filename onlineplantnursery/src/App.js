import { BrowserRouter as Route, Router, Switch } from 'react-router-dom';
import './App.css';
import AddSeed from './component/seed/AddSeed';
import GetAllSeeds from './component/seed/GetAllSeeds';
import DisplaySeedList from './component/seed/DisplaySeedList';
import GetAllSeedsByType from './component/seed/GetAllSeedsByType';
import GetSeedById from './component/seed/GetSeedById';

function App() {
 // let str=tempurature+"";
 
 return (
    <div >
      
      {/*<DisplaySeedDetails seed={seed}/>*/}
      {/*<GetSeedById />*/}
      {/*<AddSeed />*/}
      {/*<DisplaySeedList seeds={seeds} />*/}
      <GetAllSeeds />
      
    </div>
  );
}

export default App;
