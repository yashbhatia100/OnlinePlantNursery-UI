import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlantsAction } from '../../redux/getAllPlants.js/getAllPlantsActions';
import DisplayPlantList from "./DisplayPlantList";

export default function GetAllPlants() {

    let plant1 = {
        plantHeight: 100,
        plantSpread: "2m",
        commonName: "Rose",
        bloomTime: "2 months",
        plantUse: "decoration",
        difficultyLevel: "easy",
        temperature: "25 deg",
        typeOfPlant: "herb",
        plantDescription: "red flowers",
        plantStock: 10,
        plantCost: 50
    }
    let plant2 = {
        plantHeight: 50,
        plantSpread: "1m",
        commonName: "Lily",
        bloomTime: "4 months",
        plantUse: "NA",
        difficultyLevel: "difficult",
        temperature: "30 deg",
        typeOfPlant: "herb",
        plantDescription: "fragrant flowers",
        plantStock: 30,
        plantCost: 70
    }
    let plantList = [plant1, plant2]

    const response = useSelector(state=>{
        return(
            {
                plants: state.getAllPlants.plants, 
                errMsg: state.getAllPlants.error
            }
        );
    })

    const dispatch = useDispatch();

    const getAllPlants =()=>{
        dispatch(getAllPlantsAction());
    };

    useEffect(getAllPlants, []);

    return (
        <div>
            <h3>Get All Plants</h3>
            <div className="mt-5">
                <div>
                    <ul>
                        {response.plants ? (
                            <div>
                                <div className="alert alert-success">
                                    All Plants fetched successfully!
                                </div>
                                <div>
                                    <DisplayPlantList plants={response.plants} />
                                </div>
                            
                            </div>
                        ) : ''}
                    </ul>
                </div>
                {response.errMsg ? (
                    <div className="alert alert-danger">
                        Request cannot be successfull!
                        <br />
                        Error: {response.errMsg}
                    </div>
                ) : ''}
            </div>
        </div>
    );
}