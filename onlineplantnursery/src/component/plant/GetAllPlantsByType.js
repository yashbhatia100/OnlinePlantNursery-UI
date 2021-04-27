import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlantsByTypeAction } from "../../redux/getPlantsByType/getPlantsByTypeActions";
import commonStyle from './commonStyle.module.css';
import DisplayPlantList from "./DisplayPlantList";
import validationMessage from './validationMessage';

export default function GetAllPlantsByType() {

    const response = useSelector(state=>{
        return(
            {
                plants: state.getPlantsByType.plants, 
                errMsg: state.getPlantsByType.error
            }
        );
    })

    const dispatch = useDispatch();

    const initialState = { typeOfPlant: undefined, validations:{typeOfPlant:undefined} };

    const [currentState, setNewState] = useState(initialState);

    const typeRef = React.createRef();

    const submitHandler = (event) => {
        event.preventDefault();
        if(currentState.validations.typeOfPlant){
            return;
        }
        dispatch(getPlantsByTypeAction(currentState.typeOfPlant));
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
                            required = {true} 
                            list="plantTypeList"
                            autoComplete="off"
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
                            <div>
                            <div className="alert alert-success">
                                Plants of entered type fetched successfully!
                            </div>
                            <div>
                                <DisplayPlantList plants={response.plants} />
                            </div>
                            
                            </div>
                        ) : ''}
                    </ul>
                </div>
                {response.errMsg ? (
                    <div className="alert alert-danger">
                        Request cannot be successfull!
                        <br />
                        Error: {response.errMsg}
                    </div>
                ) : ''}
            </div>
        </div>
    );
}