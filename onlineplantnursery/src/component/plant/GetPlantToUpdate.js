import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlantStockAction } from "../../redux/getPlantToUpdate/updatePlantStockActions";
import commonStyle from './commonStyle.module.css';
import validationMessage from "./validationMessage";
import UpdatePlantStock from './UpdatePlantStock';

export default function GetPlantToUpdate() {

    let mockPlant = {
        plantId: 1,
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

    const response = useSelector(state => {
        return (
            {
                plant: state.updatePlantStock.plant,
                errMsg: state.updatePlantStock.error
            }
        );
    })

    const dispatch = useDispatch();

    const initialState = { name: undefined, validations: { name: undefined } };

    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {
        event.preventDefault();
        if (currentState.validations.name) {
            return;
        }
        dispatch(getPlantStockAction(currentState.name));

    }

    const changeHandler = () => {
        const fieldValue = nameRef.current.value;
        let validationMessage = validateName(fieldValue);

        const newValidations = { name: validationMessage };
        const newState = { name: fieldValue, validations: newValidations };
        setNewState(newState);
    }

    const validateName = (name) => {
        if (name != "" & name.length < 3) {
            return validationMessage.invalidNameLength;
        }
        return undefined;
    }
    return (
        <div>
            <h3>Update Plant Stock</h3>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Enter plant name to update: </label>
                        <input
                            type="text"
                            name="commonName"
                            ref={nameRef}
                            onChange={changeHandler}
                            required="true"
                            className="form-control"
                        />
                        {currentState.validations.name ? (
                            <div className={commonStyle.error}>
                                {currentState.validations.name}
                            </div>
                        ) : ''}
                    </div>
                    <button className="btn btn-primary">Get Plant</button>
                </form>
            </div>

            <div className="mt-5">
                {response.plant ? (
                    <div>
                        <div className="alert alert-success">
                            Plant to update fetched successfully!
                        </div>
                        <div>
                            <table className="table table-striped w-50">
                                <tbody>
                                    <tr>
                                        <th>Common Name</th>
                                        <td>{response.plant.commonName}</td>
                                    </tr>
                                    <tr>
                                        <th>Plant Stock</th>
                                        <td>{response.plant.plantStock}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <UpdatePlantStock props={response.plant.id} />
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