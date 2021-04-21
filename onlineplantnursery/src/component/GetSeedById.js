import React , {useState} from 'react';
import DisplaySeedDetails from './DisplaySeedDetails';
import  commonStyle from './commonStyle.module.css';


export default function GetSeedById(){
   
    let seed={
        seedId:20,
        commonName:"Watermelon seed",
        bloomTime:"4 weeks", 
        watering:"Sprinkle",
        difficultyLevel:"easy", 
        temparature:"25 deg", 
        typeOfSeeds:"Round", 
        seedsDescription:"Black colored seeds", 
        seedsStock:30, 
        seedsCost:100, 
        seedsPerPacket:20
      };
     
    const idRef=React.createRef();

    let [state,setNewState]=useState({id:undefined, seed:seed, errMsg:undefined});

    const setIdHandler=()=>{
        console.log("Inside setIdHandler");
         let field=idRef.current;
         let fieldValue=field.value;
         let newState={...state,id:fieldValue, seed:undefined , errMsg:undefined};
         setNewState(newState);
    };

    const submitHandler=(event)=>{
       console.log("Inside submitHandler");
       event.preventDefault();
       let newState={...state,seed:undefined,errMsg:"seed not found"};
       setNewState(newState);
       //console.log("current state",newState);
           
    };

    return (

        <div>
            <h3>Get seed details</h3>

            <form onSubmit={(event) => submitHandler(event)}>
                <div>
                    <label>Enter seed Id </label>
                    <input name="seed Id" type="number" ref={idRef} onChange={() => setIdHandler()} />
                </div>

                <button> Get Seed</button>
            </form>

            {state.seed ? (

                <div>
                    <h3>Seed Details </h3>
                    <DisplaySeedDetails seed={state.seed} />
                </div>

            ) : ''}


            {state.errMsg ? (
                <div className={commonStyle.error}>
                Request is not successful
                <br/>
                
                 {state.errMsg}
                </div>

            ) : ''}

        </div>

    );

}