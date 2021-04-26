import store from "../store";
import updatePlantStockConstants from "./updatePlantStockConstants";

function getPlantStockSuccess(plant){

    return(
        {
            plant:plant,
            error:'',
            type:updatePlantStockConstants.success
        }
    )
}
function getPlantStockFail(error){
    
    return(
        {
            plant:'',
            error:error,
            type:updatePlantStockConstants.fail
        }
    )
}
function getPlantStockAction(data){
    
    return()=>{
        let mockPlant={
            plantId:3,
            plantHeight: 30,
            plantSpread: "1m",
            commonName: "Marigold",
            bloomTime: "7 months",
            plantUse: "used in worship",
            difficultyLevel: "moderate",
            temperature: "20 deg",
            typeOfPlant: "herb",
            plantDescription: "yellow flowers",
            plantStock: 70,
            plantCost: 40
        }
        store.dispatch(getPlantStockSuccess(mockPlant));
    }
}

function updatePlantStockAction(data){
    return()=>{
        let mockUpdate = {
            plantId:3,
            plantHeight: 30,
            plantSpread: "1m",
            commonName: "Marigold",
            bloomTime: "7 months",
            plantUse: "used in worship",
            difficultyLevel: "moderate",
            temperature: "20 deg",
            typeOfPlant: "herb",
            plantDescription: "yellow flowers",
            plantStock: 20,
            plantCost: 40
        }
        store.dispatch(getPlantStockSuccess(mockUpdate));
    }
}

export {getPlantStockSuccess, getPlantStockFail, getPlantStockAction, updatePlantStockAction}