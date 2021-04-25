import React , {useState} from 'react';
import DisplaySeedDetails from './DisplaySeedDetails';
import  commonStyle from './commonStyle.module.css';
import {fetchSeedById}  from '../../service/SeedService';

export default function GetSeedById(props){
   let seed={
        seedId:13,
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

    const response = {seed:seed, errMsg:undefined};


     return (
        <div>
            <h3> Get seed details</h3>
            <div className ='mt-5'> 
            {response.seed ? (
                <div>
                <DisplaySeedDetails seed={response.seed} />
                </div>
            ) : (
                ""
                )
            }
            {response.errMsg ? (
                <div className = {commonStyle.error}>
                Request is not processing
                <br />
                {response.errMsg}
                </div>
            ) : (
                ""

            )}
            
            </div>
        </div>
    );
}