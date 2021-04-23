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
    commonNameRef: undefined,
    bloomTimeRef: undefined,
    wateringRef: undefined,
    difficultyLevelRef: undefined,
    temparatureRef: undefined,
    typeOfSeedsRef: undefined,
    seedsDescriptionRef: undefined,
    seedsStockRef: undefined,
    seedsCostRef: undefined,
    seedsPerPacketRef: undefined,
    formstatus: "",
    validations:{commonName:undefined, seedsStock:undefined}
  };
  const [state, setNewState] = useState(initialState);

  const response ={seed:seed,error:""};

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
    if(ref===seedsStockRef){
      validationMsg=validationSeedsStock(fieldValue);
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
    if(commonName.length<0){
      return validateMessage.commonNameNotFound;

    }
    return undefined;
  };

  const validationSeedsStock=(seedsStock)=>{
    console.log("inside validate seedsStock");
    if(seedsStock<0){
      return validateMessage.seedsStockLessThanZero;

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
            />
          {state.validations.customerName ? (
            <div className={commonStyle.error}>
              {state.validations.customerName} 
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
          />
        </div>

        <div className="form-group">
          <label>Enter the watering</label>
          <input
            name="watering"
            type="text"
            ref={wateringRef}
            onChange={() => changeHandler(wateringRef)}
          />
        </div>

        <div className="form-group">
          <label>Enter the difficultyLevel</label>
          <select name="select" onChange={changeHandler}>
            <option disable selected>
              select
            </option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="difficult">Difficult</option>

          </select>
          
        </div>

        <div className="form-group">
          <label>Enter the temparature in degree</label>
          <input
            name="temparature"
            type="number"
            ref={temparatureRef}
            onChange={() => changeHandler(temparatureRef)}
          />
        </div>

        <div className="form-group">
          <label>Enter the typeOfSeeds</label>
          <input
            name="typeOfSeeds"
            type="text"
            ref={typeOfSeedsRef}
            onChange={() => changeHandler(typeOfSeedsRef)}
          />
        </div>

        <div className="form-group">
          <label>Enter the seedsDescription</label>
          <input
            name="seedsDescription"
            type="text"
            ref={seedsDescriptionRef}
            onChange={() => changeHandler(seedsDescriptionRef)}
          />
        </div>

        <div className="form-group">
          <label>Enter the seedsStock</label>
          <input
            name="seedsStock"
            type="number"
            ref={seedsStockRef}
            onChange={() => changeHandler(seedsStockRef)}
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
          />
        </div>
        <div className="form-group">
          <label>Enter the seedsPerPacket</label>
          <input
            name="seedsPerPacket"
            type="number"
            ref={seedsPerPacketRef}
            onChange={() => changeHandler(seedsPerPacketRef)}
          />
        </div>      
        <br />
        <button className="btn btn-primary" type="submit"> Add Seed</button>
      </form>
      
      <div className="mt-5">
      {response.seed ? (
        <div>
          <h3>Seed Added Successfully</h3>
          <DisplaySeedDetails seed={response.seed} />
        </div>
      ) : (
        ""
      )}
      {response.errMsg ? (
        <div>
          <h3> Seed was not Added Successfully</h3>
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