import DisplaySeedList from "./DisplaySeedList";
import  commonStyle from './commonStyle.module.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchAllSeeds} from "../../redux/fetchallseeds/fetchAllSeedsAction";

export default function GetAllSeeds(){

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

    const currentState=useSelector(state=>{
        return{
          seeds:state.fetchAllSeeds.seeds,
          error:state.fetchAllSeeds.error
        };
    
      })
    
      const dispatch = useDispatch();
      const fetchAll = () =>{
        console.log("inside use state function");
        dispatch(fetchAllSeeds());
      };
    
    useEffect(fetchAll,[]);
    
      
    console.log("inside get all seeds");
    
    

    return(
        <div>
            <h3>Get All Seeds</h3>
           <div className="mt-5">
                <div>
                    <ul>
                        {currentState.seeds ? (
                            <DisplaySeedList seeds={currentState.seeds} />
                        ) : ''}
                    </ul>
                </div>
                {currentState.error ? (
                    <div className={commonStyle.error}>
                        Request cannot be successfull
                        <br />
                        {currentState.error}
                    </div>
                ) : ''}
            </div>
        </div>
    );
}


