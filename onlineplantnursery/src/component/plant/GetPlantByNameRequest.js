import React, { useEffect, useState } from "react";
import DisplayPlant from "./DisplayPlant";
import commonStyle from './commonStyle.module.css';
import validationMessage from "./validationMessage";

export default function GetPlantByNameRequest() {

    let mockPlant = {
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

    const nameRef = React.createRef();

    const response = {plant: mockPlant, errMsg: undefined};

    const initialState = { name: undefined, validations:{name:undefined} };

    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {
        event.preventDefault();
        if(currentState.validations.name){
            return;
        }
        console.log(currentState.name);
        
    }

    const changeHandler = () => {
        const fieldValue = nameRef.current.value;
        let validationMessage = validateName(fieldValue);
        
        const newValidations = {name:validationMessage};
        const newState = {name: fieldValue, validations: newValidations};
        setNewState(newState);
    }

    const validateName=(name)=>{
        if(name!="" & name.length<3){
            return validationMessage.invalidNameLength;
        }
        return undefined;
    }
    return (
        <div>
            <h3>Get Plant By Name On Request</h3>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Enter plant name to view: </label>
                        <input 
                            type="text" 
                            name="commonName" 
                            ref={nameRef} 
                            onChange={changeHandler} 
                            required = "true"
                            className="form-control" 
                        />
                        {currentState.validations.name?(
                            <div className={commonStyle.error}>
                                {currentState.validations.name}
                            </div>
                        ):''}
                    </div>
                    <button className="btn btn-primary">Get Plant</button>
                </form>
            </div>

            <div className="mt-5">
                {response.plant ? (
                    <div>
                        <DisplayPlant plant={response.plant} />
                    </div>
                ) : ''}
                {response.errMsg ? (
                    <div className={commonStyle.error}>
                        Request cannot be processed
                        <br />
                        {response.errMsg}
                    </div>
                ) : ''}
            </div>
        </div >
    );
}