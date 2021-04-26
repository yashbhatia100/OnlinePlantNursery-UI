import store from "../store";
import addPlantConstants from "./addPlantConstants";

function addPlantSuccess(plant){
    return(
        {
            plant:plant,
            error:'',
            type:addPlantConstants.success
        }
    );
}

function addPlantFail(error){
    return(
        {
            plant:'',
            error:error,
            type:addPlantConstants.fail
        }
    );
}

function addPlantAction(data){
    return()=>{
        const mockPlant = {
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
        store.dispatch(addPlantSuccess(mockPlant));
    }
}

export {addPlantSuccess, addPlantFail, addPlantAction};