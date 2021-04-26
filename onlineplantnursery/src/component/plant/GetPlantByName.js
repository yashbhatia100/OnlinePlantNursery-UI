import React, { useEffect } from "react";
import DisplayPlant from "./DisplayPlant";
import { useDispatch, useSelector } from "react-redux";
import { getPlantByNameAction } from "../../redux/getPlantByName/getPlantByNameActions";

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
    
    const response = useSelector(state=>{
        return(
            {
                plant: state.getPlantByName.plant, 
                errMsg: state.getPlantByName.error
            }
        );
    })

    const dispatch = useDispatch();

    const getPlantByName=()=>{
        let name=props.match.params.name;
        dispatch(getPlantByNameAction(name));
    }

    useEffect(getPlantByName, []);

    return(
        <div>
            <h3>Plant Details</h3>
            <div className="mt-5">
            {response.plant?(
                <div>
                    <div>
                        <div className="alert alert-success">
                            Plant details fetched successfully!
                        </div>
                        <div>
                            <DisplayPlant plant={response.plant}/>
                        </div>
                       
                    </div>
                </div>
            ):''}

            {response.errMsg?(
                <div className="alert alert-danger">
                    Request cannot be processed
                    <br/>
                    Error: {response.errMsg}
                </div>
            ):''}
            </div>
        </div>
    );
}