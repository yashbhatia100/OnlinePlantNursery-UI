import store from "../store";
import getPlantsByTypeConstants from "./getPlantsByTypeConstants";

function getPlantsByTypeSuccess(plants){

    return(
        {
            plants:plants,
            error:'',
            type:getPlantsByTypeConstants.success
        }
    )
}
function getPlantsByTypeFail(error){

    return(
        {
            plants:'',
            error:error,
            type:getPlantsByTypeConstants.fail
        }
    )
}
function getPlantsByTypeAction(data){

    return()=>{
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
        let plant3 = {
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
        let plantList = [plant1, plant2, plant3]

        store.dispatch(getPlantsByTypeSuccess(plantList));
    }
}

export {getPlantsByTypeSuccess, getPlantsByTypeFail, getPlantsByTypeAction}