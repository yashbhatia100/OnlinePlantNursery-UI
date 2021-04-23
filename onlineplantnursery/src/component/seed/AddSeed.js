import React, { useState } from "react";
import DisplaySeedDetails from "./DisplaySeedDetails";
import commonStyle from './commonStyle.module.css';
import validateMessage from './validationMessage';

export default function AddSeed() {
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
      }

  const commonNameRef = React.createRef();
  const bloomTimeRef = React.createRef();
  const wateringRef = React.createRef();
  const difficultyLevelRef = React.createRef();
  const temparatureRef = React.createRef();
  const typeOfSeedsRef = React.createRef();
  const seedsDescriptionRef = React.createRef();
  const seedsStockRef = React.createRef();
  const seedsCostRef = React.createRef();
  const seedsPerPacketRef = React.createRef();

  const initialState = {
    commonName: undefined,
    bloomTime: undefined,
    watering: undefined,
    difficultyLevel: undefined,
    temparature: undefined,
    typeOfSeeds: undefined,
    seedsDescription: undefined,
    seedsStock: undefined,
    seedsCost: undefined,
    seedsPerPacket: undefined,
    validations:{commonName:undefined, 
      bloomTime: undefined,  
      typeOfSeeds: undefined,
      seedsStock:undefined,
      seedsCost: undefined,
    }
  };

  const response ={seed:seed,error:undefined};

  const [state, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    console.log("Inside submitHandler");
    event.preventDefault();
    setNewState({ ...state, formstatus: "Form is successfully submitted" });
  };

  const changeHandler = (ref) => {
    console.log("Inside changeHandler");
    const field = ref.current;
    const fieldName = field.name;
    const fieldValue = field.value;
    let validationMsg;
    
    if(ref===commonNameRef){
      validationMsg=validationCommonName(fieldValue);
    }
    if(ref===bloomTimeRef){
      validationMsg=validationBloomTime(fieldValue);
    }
    
    if(ref===typeOfSeedsRef){
      validationMsg=validationTypeOfSeeds(fieldValue);
    }
    
    if(ref===seedsStockRef){
      validationMsg=validationSeedsStock(fieldValue);
    }
    if(ref===seedsCostRef){
      validationMsg=validationSeedsCost(fieldValue);
    }
    const newValidations={...state.validations,[fieldName]:validationMsg};
    const newState = {
      ...state,
      [fieldName]: fieldValue,
      seed: undefined,
      errMsg: undefined,
      validations:newValidations
    };
    setNewState(newState);
  };

  const validationCommonName=(commonName)=>{
    console.log("inside validate common name");
    if(commonName.length<3){
      return validateMessage.commonNameNotFound;

    }
    return undefined;
  };

  const validationBloomTime=(bloomTime)=>{
    console.log("inside validate bloomTime");
    if(bloomTime<0){
      return validateMessage.bloomTimeLessThanZero;

    }
    return undefined;
  };

  const validationTypeOfSeeds=(typeOfSeeds)=>{
    console.log("inside validate typeOfSeeds");
    if(typeOfSeeds.length<3){
      return validateMessage.typeOfSeedsLessThanThree;

    }
    return undefined;
  };


  const validationSeedsStock=(seedsStock)=>{
    console.log("inside validate seeds Stock");
    if(seedsStock<0){
      return validateMessage.seedsStockLessThanZero;

    }
    return undefined;
  };

  const validationSeedsCost=(seedsCost)=>{
    console.log("inside validate seeds cost");
    if(seedsCost<0){
      return validateMessage.seedsCostLessThanZero;

    }
    return undefined;
  };

  return (
    <div>
      <form onSubmit={(event) => submitHandler(event)}>
        <div className="form-group">
          <label>Enter the commonName:  </label>
          <input 
            name="commonName" 
            type="text"
            ref={commonNameRef}
            onChange={() => changeHandler(commonNameRef)}
            required = "true" 
            />
          {state.validations.commonName ? (
            <div className={commonStyle.error}>
              {state.validations.commonName} 
            </div>
          ) : (
            ""
        )}
        </div>

        <div className="form-group">
          <label>Enter the bloomTime in days</label>
          <input
            name="bloomTime"
            type="number"
            ref={bloomTimeRef}
            onChange={() => changeHandler(bloomTimeRef)}
            required = "true" 
          />
          {state.validations.bloomTime ? (
            <div className={commonStyle.error}>
              {state.validations.bloomTime} 
            </div>
          ) : (
            ""
        )}
        </div>

        <div className="form-group">
          <label>Enter the watering</label>
          <input
            name="watering"
            type="text"
            ref={wateringRef}
            onChange={() => changeHandler(wateringRef)}
            required = "true" 
          />
          
        </div>

        <div className="form-group">
          <label>Enter the difficultyLevel</label>
          <input 
            type="text" 
            name="difficultyLevel" 
            ref={difficultyLevelRef} 
            onChange={() => changeHandler(difficultyLevelRef)} 
            required = "true" 
            list="difficultyList"
            autoComplete="off"
            />
            <datalist id="difficultyList">
              <option value="Easy" />
              <option value="Medium" />
              <option value="Hard" />
            </datalist>
          
        </div>

        <div className="form-group">
          <label>Enter the temparature in degree</label>
          <input
            name="temparature"
            type="number"
            ref={temparatureRef}
            onChange={() => changeHandler(temparatureRef)}
            required = "true" 
          />
          
        </div>

        <div className="form-group">
          <label>Enter the typeOfSeeds</label>
          <input
            name="typeOfSeeds"
            type="text"
            ref={typeOfSeedsRef}
            onChange={() => changeHandler(typeOfSeedsRef)}
            required = "true" 
          />
          {state.validations.typeOfSeeds ? (
            <div className={commonStyle.error}>
              {state.validations.typeOfSeeds} 
            </div>
          ) : (
            ""
        )}
        </div>

        <div className="form-group">
          <label>Enter the seedsDescription</label>
          <input
            name="seedsDescription"
            type="text"
            ref={seedsDescriptionRef}
            onChange={() => changeHandler(seedsDescriptionRef)}
            required = "true" 
          />
        </div>

        <div className="form-group">
          <label>Enter the seedsStock</label>
          <input
            name="seedsStock"
            type="number"
            ref={seedsStockRef}
            onChange={() => changeHandler(seedsStockRef)}
            required = "true" 
          />
          {state.validations.seedsStock ? (
          <div className={commonStyle.error}>
            {state.validations.seedsStock} 
          </div>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <label>Enter the seedsCost</label>
          <input
            name="seedsCost"
            type="number"
            ref={seedsCostRef}
            onChange={() => changeHandler(seedsCostRef)}
            required = "true" 
          />
          {state.validations.seedsCost ? (
          <div className={commonStyle.error}>
            {state.validations.seedsCost} 
          </div>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <label>Enter the seedsPerPacket</label>
          <input
            name="seedsPerPacket"
            type="number"
            ref={seedsPerPacketRef}
            onChange={() => changeHandler(seedsPerPacketRef)}
            required = "true" 
          />
        </div>      
        <br />
        <button className="btn btn-primary" type="submit"> Add Seed</button>
      </form>
      
      <div className="mt-5">
      {response.seed ? (
        <div>
          <h3>Seed Added Successfully</h3>
          <DisplaySeedDetails seed={seed} />
        </div>
      ) : (
        ""
      )}
      {response.errMsg ? (
        <div >
          <h3> Seed was not Added Successfully</h3>
          <br />
          {state.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
    </div>
  );
}