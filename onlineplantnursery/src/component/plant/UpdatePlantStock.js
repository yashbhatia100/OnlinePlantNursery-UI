import React, { useState } from "react";
import GetPlantByName from "./GetPlantByName";

export default function UpdatePlantStock(){

    const initialState = {stock:undefined, plant:undefined, errMsg:undefined};

    const stockRef = React.createRef(); 

    const [currentState, setNewState] = useState(initialState);

    const submitHandler = (event) =>{
        event.preventDefault();
    }

    const changeHandler = () =>{
        const fieldValue = stockRef.current.value;
        const newState = {...currentState, stock:fieldValue, plant:undefined, errMsg:undefined};
        setNewState(newState);
    }

    return(
        <div>
        <GetPlantByName />
        <form onSubmit={submitHandler}>
            <label>Enter updated stock: </label>
            <input type="number" name="plantStock" ref={stockRef} onChange={changeHandler}/>
            <button>Save Changes</button>
        </form>
        </div>
    );
}