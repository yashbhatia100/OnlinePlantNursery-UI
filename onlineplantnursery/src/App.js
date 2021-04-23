
import './App.css';
import AddSeed from './component/seed/AddSeed';
import DisplaySeedDetails from './component/seed/DisplaySeedDetails';
import GetSeed from './component/seed/GetSeed';
import GetSeedById from './component/seed/GetSeedById';

function App() {
 // let str=tempurature+"";
 /*let seed={
  seedId:2,
  commonName:"Watermelon seed",
  bloomTime:"4 weeks", 
  watering:"Sprinkle",
  difficultyLevel:"easy", 
  temparature:"25 deg", 
  typeOfSeeds:"Round", 
  seedsDescription:"Black colored seeds", 
  seedsStock:30, 
  seedsCost:100, 
  seedsPerPacket:20
}
 */
  return (
    <div >
      {/*<DisplaySeedDetails seed={seed}/>*/}
      {/*<GetSeedById />*/}
      <AddSeed />
 
    </div>
  );
}

export default App;
