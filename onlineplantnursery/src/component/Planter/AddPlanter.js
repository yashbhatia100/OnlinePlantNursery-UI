import React, { useState } from "react";
import DisplayPlanter from "./DisplayPlanter";

export default function AddPlanter() {
  const planter = {
    id: 1,
    planterHeight: 10,
    planterCapacity: 100,
    planterColor: 2,
    planterDrainageHoles: 1,
    planterShape: "Square",
    planterStock: 100,
    planterCost: 200,
    plantId: 1,
    seedId: 1,
  };
  let errorMsg = "Cannot add the Planter";

  const planterHeightRef = React.createRef();
  const planterCapacityRef = React.createRef();
  const planterDrainageHolesRef = React.createRef();
  const planterColorRef = React.createRef();
  const planterShapeRef = React.createRef();
  const planterStockRef = React.createRef();
  const planterCostRef = React.createRef();
  const plantIdRef = React.createRef();
  const seedIdRef = React.createRef();

  const initialState = {
    planterHeightRef: undefined,
    planterCapacityRef: undefined,
    planterDrainageHolesRef: undefined,
    planterColorRef: undefined,
    planterShapeRef: undefined,
    planterStockRef: undefined,
    planterCostRef: undefined,
    plantIdRef: undefined,
    seedIdRef: undefined,
    product: undefined,
    errMsg: undefined,
    planter: undefined,
    formstatus: "",
  };
  const [state, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    console.log("Inside submit Handler");
    event.preventDefault();
    setNewState({ ...state, formstatus: "Form is submitted Successfully" });
  };

  const changeHandler = (ref) => {
    console.log("Inside changeHandler");
    const field = ref.current;
    const fieldName = field.name;
    const fieldValue = field.value;
    let newState = {
      ...state,
      [fieldName]: fieldValue,
      planter: undefined,
      errMsg: undefined,
    };
    setNewState(newState);
  };

  return (
    <div className="container">
      <div className="form-group">
        <h3>Add Planter</h3>
        <form onSubmit={(event) => submitHandler(event)}>
          <div>
            <label>Enter the planterHeight</label>
            <input
              name="planterHeight"
              type="number"
              placeholder="Enter the Planter Height"
              ref={planterHeightRef}
              onChange={() => changeHandler(planterHeightRef)}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Enter the planterCapacity</label>
            <input
              name="planterCapacity"
              type="number"
              placeholder="Enter the Planter Capacity"
              ref={planterCapacityRef}
              onChange={() => changeHandler(planterCapacityRef)}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Enter the planterDrainageHoles</label>
            <input
              name="planterDrainageHoles"
              type="number"
              placeholder="Enter the Planter Drainage Holes"
              ref={planterDrainageHolesRef}
              onChange={() => changeHandler(planterDrainageHolesRef)}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Enter the PlanterColor</label>
            <input
              name="planterColor"
              type="number"
              placeholder="Enter the Planter Color"
              ref={planterColorRef}
              onChange={() => changeHandler(planterColorRef)}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Enter the PlanterShape</label>
            <input
              name="planterShape"
              type="text"
              placeholder="Enter the Planter Shape"
              ref={planterShapeRef}
              onChange={() => changeHandler(planterShapeRef)}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Enter the PlanterStock</label>
            <input
              name="planterStock"
              type="number"
              placeholder="Enter the Planter Stock"
              ref={planterStockRef}
              onChange={() => changeHandler(planterStockRef)}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Enter the PlanterCost</label>
            <input
              name="planterCost"
              type="number"
              placeholder="Enter the Planter Cost"
              ref={planterCostRef}
              onChange={() => changeHandler(planterCostRef)}
              className="form-control"
            />
          </div>
          {/*
        <div className="form-group">
          <label>Enter the PlantId</label>
          <input
            name="plantId"
            type="number"
            ref={plantIdRef}
            onChange={() => changeHandler(plantIdRef)}
            className="form-control"
          />
        </div>
        </div>    
        <div  className="form-group">
          <label>Enter the SeedId</label>
          <input
            name="seedId"
            type="number"
            ref={seedIdRef}
            onChange={() => changeHandler(seedIdRef)}
            className="form-control"
          />
        </div>
          */}
          <div>
            <p>Select an option</p>

            <div>
              <label>Plant</label>
              <input
                name="product"
                type="radio"
                value="plant"
                onChange={() => {
                  let newState = { ...state, product: "plant" };
                  setNewState(newState);
                }}
              />
            </div>

            <div>
              <label>Seed</label>
              <input
                name="product"
                type="radio"
                value="seed"
                onChange={() => {
                  let newState = { ...state, product: "seed" };
                  setNewState(newState);
                }}
              />
            </div>

            {state.product == "plant" ? (
              <div>
                <label>Plant</label>

                <input type="text" />
              </div>
            ) : (
              ""
            )}

            {state.product == "seed" ? (
              <div>
                <label>Seed</label>

                <input type="text" />
              </div>
            ) : (
              ""
            )}
          </div>

          <br />
          <button className="btn btn-primary" type="submit">
            {" "}
            Add Planter
          </button>
        </form>
        <h2>{state.formstatus}</h2>
        <h3>Details Entered are </h3>
        planterHeight is :{state.planterHeight} <br />
        planterCapacity is :{state.planterCapacity} <br />
        planterDrainageHoles is :{state.planterDrainageHoles}
        <br />
        planterColor is :{state.planterColor}
        <br />
        planterShape is :{state.planterShape}
        <br />
        planterStock is :{state.planterStock}
        <br />
        planterCost is :{state.planterCost}
        <br />
        plantId is :{state.plantId}
        <br />
        seedId is :{state.seedId}
        <br />
        {state.planter ? (
          <div>
            <h3>Planter Added Successfully</h3>
            <DisplayPlanter planter={state.planter} />
          </div>
        ) : (
          ""
        )}
        {state.errMsg ? (
          <div>
            <h3> Planter was not Added Successfully</h3>
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
