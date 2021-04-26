import React, { useState } from "react";
import DisplaySeedList from "./DisplaySeedList";
import commonStyle from "./commonStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSeedsByType } from "../../redux/fetchallseedsbytype/fetchAllSeedsByTypeAction";

export default function GetAllSeedsByType() {
  let seed1 = {
    seedId: 14,
    commonName: "Rose seed",
    bloomTime: "3days",
    watering: "Sprinkle",
    difficultyLevel: "Easy",
    temparature: "25deg",
    typeOfSeeds: "Round",
    seedsDescription: "Red rose seeds",
    seedsStock: 20,
    seedsCost: 100.0,
    seedsPerPacket: 20,
  };
  let seed2 = {
    seedId: 15,
    commonName: "Potato",
    bloomTime: "4days",
    watering: "Sprinkle",
    difficultyLevel: "Easy",
    temparature: "25deg",
    typeOfSeeds: "Round",
    seedsDescription: "Potato seeds",
    seedsStock: 30,
    seedsCost: 50.0,
    seedsPerPacket: 10,
  };
  let seedList = [seed1, seed2];

  const typeOfSeedsRef = React.createRef();

  const [state, setNewState] = useState({ typeOfSeeds: undefined });

  const response = useSelector((state) => {
    return {
      seeds: state.fetchAllSeedsByType.seeds,
      error: state.fetchAllSeedsByType.error,
    };
  });
  const dispatch = useDispatch();

  const changeHandler = (ref) => {
    console.log("Inside Change Handler");
    const fieldVal = typeOfSeedsRef.current.value;
    const newState = { typeOfSeeds: undefined };
    setNewState(newState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Inside Submit Handler");
    const typeOfSeeds = typeOfSeedsRef.current.value;

    dispatch(fetchAllSeedsByType(typeOfSeeds));
  };

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
              ref={typeOfSeedsRef}
              className="form-control"
              required="true"
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
            ) : (
              ""
            )}
          </ul>
        </div>
        {response.error ? (
          <div className={commonStyle.error}>
            Request cannot be successfull
            <br />
            {response.error}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
