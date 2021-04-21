import { useState } from "react";
import DisplayPlant from "./DisplayPlant";

export default function GetAllPlants(){

    let plant1={
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
    let plant2={
        plantHeight:50, 
        plantSpread:"1m", 
        commonName:"Lily", 
        bloomTime:"4 months",
        plantUse:"NA",
        difficultyLevel:"difficult",
        temperature:"30 deg",
        typeOfPlant:"herb",
        plantDescription:"fragrant flowers",
        plantStock:30,
        plantCost:70 
    }
    let plantList=[plant1,plant2]

    const initialState = {plants:plantList, errMsg:undefined};
    const [currentState, setNewState] = useState(initialState)
    return(
        <div>
            <h3>Get All Plants</h3><br/>
            {currentState.plants?(
                <table className="table table-striped">
                    <tr>
                        <th>Common Name</th>
                        <th>Plant Height</th>
                        <th>Plant Spread</th>
                        <th>Bloom Time</th>
                        <th>Medicinal or Culinary Use</th>
                        <th>Difficulty Level</th>
                        <th>Temperature</th>
                        <th>Type of Plant</th>
                        <th>Plant Description</th>
                        <th>Plant Stock</th>
                        <th>Plant Cost</th>
                    </tr>
                    {currentState.plants.map(plant=>
                    <tr>
                        <td>{plant.commonName}</td>
                        <td>{plant.plantHeight}</td>
                        <td>{plant.plantSpread}</td>
                        <td>{plant.bloomTime}</td>
                        <td>{plant.plantUse}</td>
                        <td>{plant.difficultyLevel}</td>
                        <td>{plant.temperature}</td>
                        <td>{plant.typeOfPlant}</td>
                        <td>{plant.plantDescription}</td>
                        <td>{plant.plantStock}</td>
                        <td>{plant.plantCost}</td>
                    </tr>)}
                </table>
                    ):''}

            
            {currentState.errMsg?(
                <div>
                    {currentState.errMsg}
                </div>
            ):''}
        </div>
    );
}