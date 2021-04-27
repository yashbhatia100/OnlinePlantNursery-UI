import React, { useEffect, useState } from "react";
import DisplayPlant from "./DisplayPlant";
import commonStyle from './commonStyle.module.css';
import validationMessage from "./validationMessage";
import { useDispatch, useSelector } from "react-redux";
import { getPlantByNameRequestAction } from "../../redux/getPlantByNameRequest/getPlantByNameRequestActions";

export default function GetPlantByNameRequest() {

    const nameRef = React.createRef();

    const response = useSelector(state=>{
        return(
            {
                plant: state.getPlantByNameRequest.plant, 
                errMsg: state.getPlantByNameRequest.error
            }
        );
    })

    const dispatch = useDispatch();

    const initialState = { name: undefined, validations:{name:undefined} };

    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {
        event.preventDefault();
        if(currentState.validations.name){
            return;
        }
        dispatch(getPlantByNameRequestAction(currentState.name));
        
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
                        <div className="alert alert-success">
                            Plant details fetched successfully!
                        </div>
                        <div>
                            <DisplayPlant plant={response.plant} />
                        </div>
                        
                    </div>
                ) : ''}
                {response.errMsg ? (
                    <div className="alert alert-danger">
                        Request cannot be processed
                        <br />
                        Error: {response.errMsg}
                    </div>
                ) : ''}
            </div>
        </div >
    );
}