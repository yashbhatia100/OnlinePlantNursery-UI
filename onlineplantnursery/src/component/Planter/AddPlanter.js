import React, { useEffect, useState } from "react";
import DisplayPlanter from "./DisplayPlanter";
import validationMessage from "./validationMessage";
import commonStyle from "./commonStyle.module.css";
import { addPlanterAction } from "../../redux/addplanter/addPlanterActions";
import { useDispatch, useSelector } from "react-redux";
import { getAllPlantsAction } from "../../redux/getAllPlants.js/getAllPlantsActions";
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

 
  const planterHeightRef = React.createRef();
  const planterCapacityRef = React.createRef();
  const drainageHolesRef = React.createRef();
  const planterColorRef = React.createRef();
  const planterShapeRef = React.createRef();
  const planterStockRef = React.createRef();
  const planterCostRef = React.createRef();
  const plantIdRef = React.createRef();
  const seedIdRef = React.createRef();

  const initialState = {
    planterHeight: undefined,
    planterCapacity: undefined,
    drainageHoles: undefined,
    planterColor: undefined,
    planterShape: undefined,
    planterStock: undefined,
    planterCost: undefined,
    product: undefined,
    errMsg: undefined,
    planter: undefined,
    plantId:0,
    seedId: 0,
    validations: {
      planterHeight: undefined,
      planterCapacity: undefined,
      drainageHoles: undefined,
      planterShape: undefined,
      planterStock: undefined,
      planterCost: undefined,
      plantId: undefined,
      seedId: undefined,
      planterColor: undefined,
    },
  };

  const [state, setNewState] = useState(initialState);
  const response = useSelector((state) => {
    return {
      planter: state.addPlanter.planter,
      error: state.addPlanter.error,
    };
  });

  const plantList = useSelector((state)=>{
    return(
      {
        plants: state.getAllPlants.plants,
        error: state.getAllPlants.error
      }
    );
  })

  const dispatch = useDispatch();

  const getPlantList=()=>{
    dispatch(getAllPlantsAction());
  }

  useEffect(getPlantList,[]);

  const submitHandler = (event) => {
    console.log("Inside submit Handler");
    event.preventDefault();
    if (
      state.validations.planterHeight ||
      state.validations.planterCapacity ||
      state.validations.drainageHoles ||
      state.validations.planterShape ||
      state.validations.planterCost ||
      state.validations.planterStock
    ) {
      return;
    }
    let data = { ...state };
    dispatch(addPlanterAction(data));
  };

  const changeHandler = (ref) => {
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
    if (ref === drainageHolesRef) {
      validationMsg = validateDraingeHoles(fieldValue);
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
      validations: newValidations,
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
  const validateDraingeHoles = (drainageHoles) => {
    if (drainageHoles < 0) {
      return validationMessage.invalidPlatnterDrainageHoles;
    }
    return undefined;
  };

  const validatePlanterShape = (planterShape) => {
    if (planterShape.length < 5) {
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
          {state.validations.planterCapacity ? (
            <div className={commonStyle.error}>
              {state.validations.planterCapacity}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="form-group">
          <label>Planter Drainage Holes </label>
          <input
            name="drainageHoles"
            type="number"
            placeholder="Enter the Planter Drainage Holes"
            ref={drainageHolesRef}
            onChange={() => changeHandler(drainageHolesRef)}
            className="form-control"
            required
          />
          {state.validations.drainageHoles ? (
            <div className={commonStyle.error}>
              {state.validations.drainageHoles}
            </div>
          ) : (
            ""
          )}
        </div>

        <div>
          <label>Planter Color &nbsp;</label>
          <select
            name="planterColor"
            ref={planterColorRef}
            onChange={() => changeHandler(planterColorRef)}
          >
            <option>select color</option>
            {colors.map((color) => (
              <option key={color.id} value={color.id}>
                {color.name}
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
          {state.validations.planterShape ? (
            <div className={commonStyle.error}>
              {state.validations.planterShape}
            </div>
          ) : (
            ""
          )}
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
          {state.validations.planterStock ? (
            <div className={commonStyle.error}>
              {state.validations.planterStock}
            </div>
          ) : (
            ""
          )}
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
          {state.validations.planterCost ? (
            <div className={commonStyle.error}>
              {state.validations.planterCost}
            </div>
          ) : (
            ""
          )}
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
                let newState = {
                  ...state,
                  product: "plant",
                  seedId: 0,
                };
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
                let newState = {
                  ...state,
                  product: "seed",
                  plantId:0,
                };
                setNewState(newState);
              }}
            />
          </div>

          {state.product === "plant" ? (
            <select
              name="plantId"
              ref={plantIdRef}
              onChange={() => changeHandler(plantIdRef)}
            >
              <option disabled selected>
                select plant
              </option>
              {plantList.plants.map((plant) => (
                <option key={plant.plantId} value={plant.plantId}>
                  {plant.commonName}
                </option>
              ))}
            </select>
          ) : (
            ""
          )}

          {state.product === "seed" ? (
            <div>
              <select
                name="seedId"
                ref={seedIdRef}
                onChange={() => changeHandler(seedIdRef)}
              >
                <option disabled selected>
                  select seed
                </option>
                {seeds.map((seed) => (
                  <option key={seed.id} value={seed.id}>
                    {seed.name}
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
      {response.error ? (
        <div>
          <h3> Planter was not Added Successfully</h3>
          <br />
          {response.error}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
