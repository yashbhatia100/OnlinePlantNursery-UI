import { Link } from 'react-router-dom';
import DisplayPlant from './DisplayPlant';

export default function DisplayPlantList({plants}) {
    
    return(
        <div>
            <ul>
                {
                    plants.map(plant=><li key={plant.commonName}>
                        <Link to={`/plantbyname/${plant.commonName}`}>
                            <span>{plant.commonName} - {plant.plantDescription}</span>
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );
}