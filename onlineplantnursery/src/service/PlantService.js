import axios from 'axios';

const baseUrl = "http://localhost:8585/plants";

function addPlant(data){
    const url = baseUrl+"/add";
    let requestData = {
        plantHeight: data.plantHeight,
        plantSpread: data.plantSpread,
        commonName: data.commonName,
        bloomTime: data.bloomTime,
        medicinalOrCulinaryUse: data.plantUse,
        difficultyLevel: data.difficultyLevel,
        temperature: data.temperature,
        typeOfPlant: data.typeOfPlant,
        plantDescription: data.plantDescription,
        plantsStock: data.plantStock,
        plantCost: data.plantCost
    };
    const promise = axios.post(url, requestData);
    return promise;
}

function getPlantByName(commonName){
    const url=baseUrl+"/fetch/byname/"+commonName;
    const promise = axios.get(url);
    return promise;
}

function getPlantsByType(typeOfPlant){
    const url=baseUrl+"/fetch/bytype/"+typeOfPlant;
    const promise = axios.get(url);
    return promise;
}

function getAllPlants(){
    const url=baseUrl+"/fetch";
    const promise = axios.get(url);
    return promise;
}

function updateStock(data){
    const url=baseUrl+"/updatestock";
    let requestData={
        plantId:data.plantId,
        plantsStock:data.plantStock
    };
    const promise = axios.put(url, requestData);
    return promise;
}

export {addPlant, getPlantByName, getPlantsByType, getAllPlants, updateStock};