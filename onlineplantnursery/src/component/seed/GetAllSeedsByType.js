import React, { useState } from "react";
import DisplaySeedList from "./DisplaySeedList";
import  commonStyle from './commonStyle.module.css';

export default function GetAllSeedsByType(){
    let seed1={
        seedId:14,
        commonName:"Rose seed",
		bloomTime:"3days",
		watering:"Sprinkle",
		difficultyLevel:"Easy",
		temparature:"25deg",
		typeOfSeeds:"Round",
		seedsDescription:"Red rose seeds",
		seedsStock:20,
		seedsCost: 100.0,
		seedsPerPacket:20
    }
    let seed2={
        seedId:15,
        commonName:"Potato",
		bloomTime:"4days",
		watering:"Sprinkle",
		difficultyLevel:"Easy",
		temparature:"25deg",
		typeOfSeeds:"Round",
		seedsDescription:"Potato seeds",
		seedsStock:30,
		seedsCost: 50.0,
		seedsPerPacket:10
    }
    let seedList=[seed1,seed2]

    const response={seeds:seedList,errMsg:undefined}

    const [state,setNewState]=useState({typeOfSeeds:undefined});

    const typeRef=React.createRef();

    const submitHandler = (event) => {
        event.preventDefault();
        
        console.log(state.typeOfSeeds)
    }

    const changeHandler = () => {
        const fieldValue = typeRef.current.value;
        const newState = {typeOfSeeds: fieldValue};
        setNewState(newState);
    }

    
    return (
        <div>
            <h3>Get Seeds By Type</h3>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Enter type of seeds</label>
                        <input
                            type="text"
                            name="typeOfSeeds"
                            onChange={changeHandler}
                            ref={typeRef}
                            className="form-control"
                            required = "true"                 
                        />
                                      
                    </div>
                    <button className="btn btn-primary">Get Seeds</button>
                </form>
            </div>
            <div className="mt-5">
                <div>
                    <ul>
                        {response.seeds ? (
                            <DisplaySeedList seeds={response.seeds} />
                        ) : ''}
                    </ul>
                </div>
                {response.errMsg ? (
                    <div className={commonStyle.error}>
                        Request cannot be successfull
                        <br />
                        {response.errMsg}
                    </div>
                ) : ''}
            </div>
        </div>
    );
}