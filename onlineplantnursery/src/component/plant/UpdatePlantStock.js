import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { updatePlantStockAction } from "../../redux/getPlantToUpdate/updatePlantStockActions";
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

    const stockRef = React.createRef();

    const initialState={plantStock:undefined, updated:undefined, validations:{plantStock:undefined}};

    const [currentState, setNewState] = useState(initialState);

    const dispatch=useDispatch();

    const submitHandler = (event)=>{
        event.preventDefault();
        if(currentState.validations.plantStock){
            return;
        }
        let data={plantId:props.id, plantStock:currentState.plantStock}
        dispatch(updatePlantStockAction(data))
        setNewState({...currentState, updated:true})
        stockRef.current.value="";
    }


    const changeHandler = ()=>{
        const fieldValue = stockRef.current.value;
        let validationMessage = validateStock(fieldValue);
        const newValidations = {plantStock:validationMessage};
        const newState = {plantStock:fieldValue, validations:newValidations};
        setNewState(newState);
    }

    const validateStock=(plantStock)=>{
        if(plantStock!=="" && plantStock<=0){
            return validationMessage.lessThanZero;
        }
        return undefined;
    }

    return(
        <div>
            <div className="mt-5 mb-5">
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
                        <button className="btn btn-primary">Save Changes</button>  
                </form>    
                {currentState.updated?(
                    <div className="alert alert-success mt-3">
                        Plant stock updated successfully!
                    </div>
                ):''}             
            </div>                    
        </div>
    );
}