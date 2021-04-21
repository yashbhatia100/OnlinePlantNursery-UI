import React, { useState } from "react";
import DisplaySeedDetails from "./DisplaySeedDetails";

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
      };
  let errorMsg = "Cannot add the Planter";

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
    errMsg: undefined,
    seed: undefined,
    formstatus: "",
  };
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
    let newState = {
      ...state,
      [fieldName]: fieldValue,
      seed: undefined,
      errMsg: undefined,
    };
    setNewState(newState);
  };

  return (
    <div>
      <form onSubmit={(event) => submitHandler(event)}>
        <div>
          <label>Enter the commonName</label>
          <input
            name="commonName"
            type="text"
            ref={commonNameRef}
            onChange={() => changeHandler(commonNameRef)}
          />
        </div>

        <div>
          <label>Enter the bloomTime</label>
          <input
            name="bloomTime"
            type="text"
            ref={bloomTimeRef}
            onChange={() => changeHandler(bloomTimeRef)}
          />
        </div>

        <div>
          <label>Enter the watering</label>
          <input
            name="watering"
            type="text"
            ref={wateringRef}
            onChange={() => changeHandler(wateringRef)}
          />
        </div>

        <div>
          <label>Enter the difficultyLevel</label>
          <input
            name="difficultyLevel"
            type="text"
            ref={difficultyLevelRef}
            onChange={() => changeHandler(difficultyLevelRef)}
          />
        </div>

        <div>
          <label>Enter the temparature</label>
          <input
            name="temparature"
            type="text"
            ref={temparatureRef}
            onChange={() => changeHandler(temparatureRef)}
          />
        </div>

        <div>
          <label>Enter the typeOfSeeds</label>
          <input
            name="typeOfSeeds"
            type="text"
            ref={typeOfSeedsRef}
            onChange={() => changeHandler(typeOfSeedsRef)}
          />
        </div>

        <div>
          <label>Enter the seedsDescription</label>
          <input
            name="seedsDescription"
            type="text"
            ref={seedsDescriptionRef}
            onChange={() => changeHandler(seedsDescriptionRef)}
          />
        </div>

        <div>
          <label>Enter the seedsStock</label>
          <input
            name="seedsStock"
            type="number"
            ref={seedsStockRef}
            onChange={() => changeHandler(seedsStockRef)}
          />
        </div>
        <div>
          <label>Enter the seedsCost</label>
          <input
            name="seedsCost"
            type="number"
            ref={seedsCostRef}
            onChange={() => changeHandler(seedsCostRef)}
          />
        </div>
        <div>
          <label>Enter the seedsPerPacket</label>
          <input
            name="seedsPerPacket"
            type="number"
            ref={seedsPerPacketRef}
            onChange={() => changeHandler(seedsPerPacketRef)}
          />
        </div>      
        <br />
        <button type="submit"> Add Seed</button>
      </form>
      <h2>{state.formstatus}</h2>
      <h3>Details added are </h3>
      commonName is :{state.commonName} <br />
      bloomTime is :{state.bloomTime} <br />
      watering is :{state.watering}
      <br />
      difficultyLevel is :{state.difficultyLevel}
      <br />
      temparature is :{state.temparature}
      <br />
      typeOfSeeds is :{state.typeOfSeeds}
      <br />
      seedsDescription is :{state.seedsDescription}
      <br />
      seedsStock is :{state.seedsStock}
      <br />
      seedsCost is :{state.seedsCost}
      <br />
      seedsPerPacket is :{state.seedsPerPacket}
      <br />
      {state.seed ? (
        <div>
          <h3>Seed Added Successfully</h3>
          <DisplaySeedDetails seed={state.seed} />
        </div>
      ) : (
        ""
      )}
      {state.errMsg ? (
        <div>
          <h3> Seed was not Added Successfully</h3>
          <br />
          {state.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}