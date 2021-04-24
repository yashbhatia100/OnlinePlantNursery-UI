import React, { useState } from "react";
import DisplayPlant from "./DisplayPlant";
import commonStyle from './commonStyle.module.css';

export default function GetPlantByName(props){

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
    
    const response = {plant:mockPlant, errMsg:undefined};

    //const [currentState, setNewState]=useState({name:undefined});

    return(
        <div>
            <h3>Plant Details</h3>
            <div className="mt-5">
            {response.plant?(
                <div>
                    <div>
                        <DisplayPlant plant={response.plant}/>
                    </div>
                </div>
            ):''}

            {response.errMsg?(
                <div className={commonStyle.error}>
                    Request cannot be processed
                    <br/>
                    {response.errMsg}
                </div>
            ):''}
            </div>
        </div>
    );
}