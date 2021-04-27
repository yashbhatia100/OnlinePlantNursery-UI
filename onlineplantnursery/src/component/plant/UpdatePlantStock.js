import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { updatePlantStockAction } from "../../redux/getPlantToUpdate/updatePlantStockActions";
import commonStyle from './commonStyle.module.css';
import validationMessage from "./validationMessage";

export default function UpdatePlantStock(){

    const stockRef = React.createRef();

    const response = useSelector(state => {
        return (
            {
                plant: state.updatePlantStock.plant,
                errMsg: state.updatePlantStock.error
            }
        );
    })

    const initialState={plantStock:undefined, updated:undefined, validations:{plantStock:undefined}};

    const [currentState, setNewState] = useState(initialState);

    const dispatch=useDispatch();

    const submitHandler = (event)=>{
        event.preventDefault();
        if(currentState.validations.plantStock){
            return;
        }
        let data={plantId:response.plant.plantId, plantStock:currentState.plantStock}
        
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