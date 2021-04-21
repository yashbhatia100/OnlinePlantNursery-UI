import React, { useState } from "react";
import DisplayPlant from "./DisplayPlant";

export default function GetPlantByName(){

    let mockPlant={
        plantHeight:100, 
        plantSpread:"2m", 
        commonName:"Rose", 
        bloomTime:"2 months",
        plantUse:"decoration",
        difficultyLevel:"easy",
        temperature:"25 deg",
        typeOfPlant:"herb",
        plantDescription:"red flowers",
        plantStock:10,
        plantCost:50
    }

    const nameRef = React.createRef();

    const initialState = {name:undefined, plant:undefined, errMsg:undefined};

    const [currentState, setNewState] = useState(initialState);

    const submitHandler=(event)=>{
        event.preventDefault();
    }

    const changeHandler=()=>{
        const fieldValue= nameRef.current.value;
        const newState = {...currentState, name:fieldValue};
        setNewState(newState);
    }

    return(
        <div>
            <h3>Get Plant By Name</h3><br/>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                <label>Enter Plant Name: </label>
                <input type="text" name="commonName" ref={nameRef} onChange={changeHandler} className="form-control"/><br/>
                <button className="btn btn-primary">Get Plant</button>
                </div>
            </form>
            <br/>

            {currentState.plant?(
                <div>
                    <DisplayPlant plant={currentState.plant}/>
                </div>
            ):''}
            {currentState.errMsg?(
                <div>
                    Request cannot be processed
                    <br/>
                    {currentState.errMsg}
                </div>
            ):''}
        </div>
    );
}