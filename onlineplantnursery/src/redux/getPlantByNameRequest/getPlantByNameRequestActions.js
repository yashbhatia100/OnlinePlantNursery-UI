import store from "../store";
import getPlantByNameRequestConstants from "./getPlantByNameRequestConstants";

function getPlantByNameRequestSuccess(plant){

    return(
        {
            plant:plant,
            error:'',
            type:getPlantByNameRequestConstants.success
        }
    )
}
function getPlantByNameRequestFail(error){
    
    return(
        {
            plant:'',
            error:error,
            type:getPlantByNameRequestConstants.fail
        }
    )
}
function getPlantByNameRequestAction(){
    
    return()=>{
    let mockPlant={
        plantHeight: 100,
        plantSpread: "2m",
        commonName: "Lotus",
        bloomTime: "2 months",
        plantUse: "decoration",
        difficultyLevel: "easy",
        temperature: "25 deg",
        typeOfPlant: "herb",
        plantDescription: "red flowers",
        plantStock: 10,
        plantCost: 50
    }
    store.dispatch(getPlantByNameRequestSuccess(mockPlant));
}
}

export {getPlantByNameRequestSuccess, getPlantByNameRequestFail, getPlantByNameRequestAction}