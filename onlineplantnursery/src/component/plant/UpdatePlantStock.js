import React, { useState, useEffect } from "react"
import {Redirect} from "react-router-dom";
import commonStyle from './commonStyle.module.css';
import validationMessage from "./validationMessage";

export default function UpdatePlantStock(props){

    let mockPlant={
        plantId:1,
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

    const initialState={plantStock:undefined, validations:{plantStock:undefined}};

    const response = {plant:undefined, errMsg:undefined};

    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event)=>{
        event.preventDefault();
        if(currentState.validations.plantStock){
            return;
        }
        
    }


    const changeHandler = ()=>{
        const fieldValue = stockRef.current.value;
        let validationMessage = validateStock(fieldValue);
        const newValidations = {plantStock:validationMessage};
        const newState = {plantStock:fieldValue, validations:newValidations};
        setNewState(newState);
    }

    const stockRef = React.createRef();

    const validateStock=(plantStock)=>{
        if(plantStock!=="" && plantStock<=0){
            return validationMessage.lessThanZero;
        }
        return undefined;
    }

    return(
        <div>
            <h3>Update Plant Stock</h3>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                    <label>Enter updated stock :</label>
                    <input
                        name="plantStock"
                        type="number"
                        ref={stockRef}
                        onChange = {changeHandler}
                        required = {true}
                        className="form-control" 
                    />
                    {currentState.validations.plantStock?(
                        <div className={commonStyle.error}>
                            {currentState.validations.plantStock}
                        </div>
                    ):''}
                    </div>
                        <button className="btn btn-primary">Save Change</button>  
                </form>
            </div>
            <div className="mt-5">
            {response.plant?(
                <Redirect to={`/plantbyname/${response.plant.commonName}`}/>                          
            ):''}  
            
            {response.errMsg?(
                <div className={commonStyle.error}>
                    Stock cannot be updated
                    <br/>
                    {response.errMsg}
                </div>                    
            ):''}   
            </div>                    
        </div>
    );
}