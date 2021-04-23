import React, { useState } from "react";
import DisplayPlanter from "./DisplayPlanter";
import validationMessage from "./validationMessage"
import commonStyle from "./commonStyle.module.css";

export default function AddPlanter() {
  const plants = [
    { id: 1, name: "Mango" },
    { id: 2, name: "Lily" },
  ];

  const colors = [
    { id: 1, name: "Red" },
    { id: 2, name: "Green" },
    { id: 3, name: "Yellow" },
  ];

  const seeds = [
    { id: 1, name: "Rose" },
    { id: 2, name: "Carrot" },
  ];

  const mockplanter = {
    planterId:1,
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
  let errMsg = "Cannot add the Planter";

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
    planterHeight: undefined,
    planterCapacity: undefined,
    planterDrainageHoles: undefined,
    planterColor: undefined,
    planterShape: undefined,
    planterStock: undefined,
    planterCost: undefined,
    seedId: undefined,
    product: undefined,
    errMsg: undefined,
    planter: undefined,
    plantId: undefined,
    seedId: undefined,
    validations: {
      planterHeight: undefined,
      planterCapacity: undefined,
      planterDrainageHoles: undefined,
      planterShape: undefined,
      planterStock: undefined,
      planterCost: undefined,
    }
  };

  const response = {planter:mockplanter,errMsg:undefined};
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
    let validationMsg;
    if (ref === planterHeightRef) {
      validationMsg = validatePlanterHeight(fieldValue);
    }
    if (ref === planterCapacityRef) {
      validationMsg = validatePlanterCapacity(fieldValue);
    }
    if (ref === planterDrainageHolesRef) {
      validationMsg = validatePlanterDraingeHoles(fieldValue);
    }

    if (ref === planterShapeRef) {
      validationMsg = validatePlanterShape(fieldValue);
    }
    if (ref === planterStockRef) {
      validationMsg = validatePlanterStock(fieldValue);
    }
    if (ref === planterCostRef) {
      validationMsg = validatePlanterCost(fieldValue);
    }

    const newValidations = { ...state.validations, [fieldName]: validationMsg };
    const newState = {
      ...state,
      [fieldName]: fieldValue,
      planter: undefined,
      errMsg: undefined,
      validation: newValidations
    };
    setNewState(newState);
  };

  const validatePlanterHeight = (planterHeight) => {
    
    if (planterHeight < 0) {
      console.log("inside validate Planter Height");
     return validationMessage.invalidPlanterHeight;
    }
    return undefined;
  };

  const validatePlanterCapacity = (planterCapacity) => {
    if (planterCapacity < 0) {
      return validationMessage.invalidPlanterCapacity;
    }
    return undefined;
  };
  const validatePlanterDraingeHoles = (planterDrainageHoles) => {
    if (planterDrainageHoles < 0) {
      return validationMessage.invalidPlatnterDrainageHoles;
    }
    return undefined;
  };

  const validatePlanterShape = (planterShape) => {
    if (planterShape.length < 3) {
      return validationMessage.invalidPlanterShape;
    }
    return undefined;
  };

  const validatePlanterCost = (planterCost) => {
    if (planterCost < 0) {
      return validationMessage.invalidPlanterCost;
    }
    return undefined;
  };

  const validatePlanterStock = (planterStock) => {
    if (planterStock < 0) {
      return validationMessage.invalidPlanterStock;
    }
    return undefined;
  };

  return (
    <div>
      <h3>Add Planter</h3>
      <form onSubmit={(event) => submitHandler(event)}>
        <div className="form-group">
          <label>Planter Height in cm</label>
          <input
            name="planterHeight"
            type="number"
            placeholder="Enter the Planter Height"
            ref={planterHeightRef}
            onChange={() => changeHandler(planterHeightRef)}
            className="form-control"
            required
          />
          {state.validations.planterHeight ? (
            <div className={commonStyle.error}>
              {state.validations.planterHeight}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="form-group">
          <label>Planter Capacity in ml</label>
          <input
            name="planterCapacity"
            type="number"
            placeholder="Enter the Planter Capacity"
            ref={planterCapacityRef}
            onChange={() => changeHandler(planterCapacityRef)}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>Planter Drainage Holes </label>
          <input
            name="planterDrainageHoles"
            type="number"
            placeholder="Enter the Planter Drainage Holes"
            ref={planterDrainageHolesRef}
            onChange={() => changeHandler(planterDrainageHolesRef)}
            className="form-control"
            required
          />
        </div>

        <div>
          <label>Planter Color &nbsp;</label>
          <select
            name="color"
            ref={planterColorRef}
            onChange={() => changeHandler(planterColorRef)}
          >
            <option disabled selected>
              select color
            </option>
            {colors.map((colors) => (
              <option key={colors.id} value={colors.id}>
                {colors.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Planter Shape</label>
          <input
            name="planterShape"
            type="text"
            placeholder="Enter the Planter Shape"
            ref={planterShapeRef}
            onChange={() => changeHandler(planterShapeRef)}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>Planter Stock</label>
          <input
            name="planterStock"
            type="number"
            placeholder="Enter the Planter Stock"
            ref={planterStockRef}
            onChange={() => changeHandler(planterStockRef)}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>Planter Cost </label>
          <input
            name="planterCost"
            type="number"
            placeholder="Enter the Planter Cost"
            ref={planterCostRef}
            onChange={() => changeHandler(planterCostRef)}
            className="form-control"
            required
          />
        </div>

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
            <select
              name="plant"
              ref={plantIdRef}
              onChange={() => changeHandler(plantIdRef)}
            >
              <option disabled selected>
                select plant
              </option>
              {plants.map((plants) => (
                <option key={plants.id} value={plants.id}>
                  {plants.name}
                </option>
              ))}
            </select>
          ) : (
            ""
          )}

          {state.product == "seed" ? (
            <div>
              <select
                name="seed"
                ref={seedIdRef}
                onChange={() => changeHandler(seedIdRef)}
              >
                <option disabled selected>
                  select seed
                </option>
                {seeds.map((seeds) => (
                  <option key={seeds.id} value={seeds.id}>
                    {seeds.name}
                  </option>
                ))}
              </select>
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

      {response.planter ? (
        <div>
          <h3>Planter Added Successfully</h3>
          <DisplayPlanter planter={response.planter} />
        </div>
      ) : (
        ""
      )}
      {response.errMsg ? (
        <div>
          <h3> Planter was not Added Successfully</h3>
          <br />
          {response.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
