import React, { useState } from 'react';
import DisplayPlant from './DisplayPlant';
import commonStyle from './commonStyle.module.css';

export default function AddPlant() {

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

    const plantHeightRef = React.createRef();
    const plantSpreadRef = React.createRef();
    const commonNameRef = React.createRef();
    const bloomTimeRef = React.createRef();
    const plantUseRef = React.createRef();
    const difficultyLevelRef = React.createRef();
    const temperatureRef = React.createRef();
    const typeOfPlantRef = React.createRef();
    const plantDescriptionRef = React.createRef();
    const plantStockRef = React.createRef();
    const plantCostRef = React.createRef();

    const initialState = {
        plantHeight: undefined,
        plantSpread: undefined,
        commonName: undefined,
        bloomTime: undefined,
        plantUse: undefined,
        difficultyLevel: undefined,
        temperature: undefined,
        typeOfPlant: undefined,
        plantDescription: undefined,
        plantStock: undefined,
        plantCost: undefined,
    };

    const response = { plant: mockPlant, errMsg: undefined };

    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) => {
        event.preventDefault();
        const data = { ...currentState };
        console.log("Plant data:", data)
    }

    const changeHandler = (ref) => {
        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        const newState = { ...currentState, [fieldName]: fieldValue };
        setNewState(newState);
    }

    return (
        <div>
            <h3>Add Plant</h3>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Enter plant height: </label>
                        <input 
                            type="number"
                            name="plantHeight"
                            ref={plantHeightRef} 
                            onChange={() => changeHandler(plantHeightRef)} 
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter plant spread: </label>
                        <input 
                            type="text" 
                            name="plantSpread"
                            ref={plantSpreadRef} 
                            onChange={() => changeHandler(plantSpreadRef)} 
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter common name: </label>
                        <input 
                            type="text" 
                            name="commonName" 
                            ref={commonNameRef} 
                            onChange={() => changeHandler(commonNameRef)} 
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter bloom time: </label>
                        <input 
                            type="text" 
                            name="bloomTime" 
                            ref={bloomTimeRef}
                            onChange={() => changeHandler(bloomTimeRef)} 
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter medicinal or culinary use: </label>
                        <input 
                            type="text" 
                            name="plantUse" 
                            ref={plantUseRef} 
                            onChange={() => changeHandler(plantUseRef)} 
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter difficulty level: </label>
                        <input 
                            type="text" 
                            name="difficultyLevel" 
                            ref={difficultyLevelRef} 
                            onChange={() => changeHandler(difficultyLevelRef)} 
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter temperature: </label>
                        <input 
                            type="text" 
                            name="temperature" 
                            ref={temperatureRef} 
                            onChange={() => changeHandler(temperatureRef)} 
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter type of plant: </label>
                        <input 
                            type="text" 
                            name="typeOfPlant" 
                            ref={typeOfPlantRef} 
                            onChange={() => changeHandler(typeOfPlantRef)} 
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter description: </label>
                        <input 
                            type="textarea" 
                            name="plantDescription" 
                            ref={plantDescriptionRef} 
                            onChange={() => changeHandler(plantDescriptionRef)} 
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter plant stock: </label>
                        <input 
                            type="number" 
                            name="plantStock" 
                            ref={plantStockRef} 
                            onChange={() => changeHandler(plantStockRef)} 
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Enter plant cost: </label>
                        <input 
                            type="number" 
                            name="plantCost" 
                            ref={plantCostRef} 
                            onChange={() => changeHandler(plantCostRef)} 
                            className="form-control" />
                    </div>
                    <button className="btn btn-primary">Add Plant</button>
                </form>
            </div>
            <div className="mt-5">
            {response.plant ? (
                <div>
                    <DisplayPlant plant={mockPlant} />
                </div>
            ) : ''}

            {response.errMsg ? (
                <div className={commonStyle.error}>
                    Request cannot be processed
                    <br />
                    {currentState.errMsg}
                </div>
            ) : ''}
            </div>

        </div >
    );
}