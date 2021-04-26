import store from "../store";
import getPlantByNameConstants from "./getPlantByNameConstants";

function getPlantByNameSuccess(plant){
    return ({
            plant:plant, 
            error:'', 
            type:getPlantByNameConstants.success
        });
}

function getPlantByNameFail(error){
    return ({
        plant:'', 
        error:error, 
        type:getPlantByNameConstants.fail
    });
}

function getPlantByNameAction(data){

    return()=>{
    let mockPlant={
        plantId:1,
        plantHeight:100, 
        plantSpread:"2m", 
        commonName:"Lily",  
        bloomTime:"2 months",
        plantUse:"decoration",
        difficultyLevel:"easy",
        temperature:"25 deg",
        typeOfPlant:"herb",
        plantDescription:"red flowers",
        plantStock:10,
        plantCost:50
    }
    store.dispatch(getPlantByNameSuccess(mockPlant));
    }
}

export {getPlantByNameSuccess, getPlantByNameFail, getPlantByNameAction};