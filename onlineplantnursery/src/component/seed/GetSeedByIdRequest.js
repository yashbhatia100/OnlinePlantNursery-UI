import React , {useState} from 'react';
import DisplaySeedDetails from './DisplaySeedDetails';
import  commonStyle from './commonStyle.module.css';


export default function GetSeedById(){
   
    const seed={
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

    const response ={seed:seed,error:undefined};

    const [state,setNewState]=useState({seedId:undefined});

    const setIdHandler=()=>{
        console.log("Inside setIdHandler");
         let field=idRef.current;
         let fieldValue=field.value;
         let newState={...state,seedId:fieldValue};
         setNewState(newState);
    };

    const submitHandler=(event)=>{
       console.log("Inside submitHandler");
       event.preventDefault();
       //console.log("current state",seedId);
           
    };

    return (

        <div>
            <h3>Get seed details</h3>
            <div>
            <form onSubmit={(event) => submitHandler(event)}>
                <div className='form-group'>
                    <label>Enter seed Id </label>
                    <input name="seed Id" type="number" ref={idRef} onChange={() => setIdHandler()} required="true" className='form-control' />
                </div>

                <button className="btn btn-primary"> Get Seed</button>
            </form>
        </div>
        <div className="mt-5">
        {response.seed ? (

                <div>
                    <h3>Seed Details </h3>
                    <DisplaySeedDetails seed={response.seed} />
                </div>

            ) : ''}


            {response.error ? (
                <div className={commonStyle.error}>
                Request is not successful
                <br/>
                
                 {response.error}
                </div>

            ) : ''}

        </div>
    </div>

    );
}
