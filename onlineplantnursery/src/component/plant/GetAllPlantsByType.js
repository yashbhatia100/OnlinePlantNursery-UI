import React, { useState } from "react";
import commonStyle from './commonStyle.module.css';
import DisplayPlantList from "./DisplayPlantList";
import validationMessage from './validationMessage';

export default function GetAllPlantsByType() {

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

    const response = { plants: plantList, errMsg: undefined };

    const initialState = { typeOfPlant: undefined, validations:{typeOfPlant:undefined} };

    const [currentState, setNewState] = useState(initialState);

    const typeRef = React.createRef();

    const submitHandler = (event) => {
        event.preventDefault();
        if(currentState.validations.typeOfPlant){
            return;
        }
        console.log(currentState.typeOfPlant)
    }

    const changeHandler = () => {
        const fieldValue = typeRef.current.value;
        let validationMessage = validatePlantType(fieldValue);
        const newValidations = {typeOfPlant:validationMessage}
        const newState = {typeOfPlant: fieldValue, validations:newValidations};
        setNewState(newState);
    }

    const validatePlantType=(plantType)=>{
        const valid=["Herb", "Shrub", "Ferns", "Fruit", "Climbers",""]
        if(valid.includes(plantType)){
            return undefined;
        }
        return validationMessage.invalidValue;
    }

    return (
        <div>
            <h3>Get Plants By Type</h3>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Enter type of plants to view: </label>
                        <input
                            type="text"
                            name="typeOfPlant"
                            onChange={changeHandler}
                            ref={typeRef}
                            className="form-control"
                            required = "true" 
                            list="plantTypeList"
                            autocomplete="off"
                        />
                        <datalist id="plantTypeList">
                            <option value="Herb" />
                            <option value="Shrub" />
                            <option value="Ferns" />
                            <option value="Fruit" />
                            <option value="Climbers" />
                        </datalist>
                        {currentState.validations.typeOfPlant?(
                            <div className={commonStyle.error}>
                               {currentState.validations.typeOfPlant} 
                            </div>
                        ):''}
                    </div>
                    <button className="btn btn-primary">Get Plants</button>
                </form>
            </div>
            <div className="mt-5">
                <div>
                    <ul>
                        {response.plants ? (
                            <DisplayPlantList plants={response.plants} />
                        ) : ''}
                    </ul>
                </div>
                {response.errMsg ? (
                    <div className={commonStyle.error}>
                        Request cannot be successfull
                        <br />
                        {response.errMsg}
                    </div>
                ) : ''}
            </div>
        </div>
    );
}