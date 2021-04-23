import DisplaySeedDetails from "./DisplaySeedDetails";
import {Link} from 'react-router-dom';
export default function DisplaySeedList({ seeds }) {
  return (
    <div>
        <ul>
      
        {seeds.map((seed) => <li key={seed.seedId}>
          <DisplaySeedDetails seed={seed}/>
        </li>
        
         )} 
         </ul>  
    </div>
  );
}