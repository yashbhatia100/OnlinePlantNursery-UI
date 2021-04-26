import store from "../store";
import getAllPlantsConstants from "./getAllPlantsConstants";

function getAllPlantsSuccess(plants){

    return ({
            plants:plants, 
            error:'', 
            type:getAllPlantsConstants.success
        });
}

function getAllPlantsFail(error){

    return({
            plants:'',
            error:error,
            type:getAllPlantsConstants.fail 
        });
}

function getAllPlantsAction(){

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
        let plantList = [plant1, plant2]

        store.dispatch(getAllPlantsSuccess(plantList));
    }
}
export {getAllPlantsSuccess, getAllPlantsFail, getAllPlantsAction};