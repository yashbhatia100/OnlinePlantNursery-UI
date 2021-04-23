import React,{useState} from "react";
import DisplayPlanter from"./DisplayPlanter";
import commonStyle from "./commonStyle.module.css";
export default function GetPlanterByIdRequest(){
  const mockplanter = {
    planterId: 1,
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

  const planterIdRef = React.createRef();
  const response={planter:mockplanter,errMsg:undefined};
  const initialState={planterId:undefined}
  const [currentState, setNewState] = useState(initialState);

  const setIdHandler = () => {
    console.log("Inside setId Handler");
    const  fieldValue = planterIdRef.current.value;
    const newState = {
      ...currentState,
      planterId: fieldValue,
    };
    setNewState(newState);
  };
  const submitHandler = (event) => {
    console.log("Inside Submit Handler");
    event.preventDefault();
  };

  return (
    <div>
      <h3>Get Planter Details</h3>
      <form onSubmit={(event) => submitHandler(event)}>
        <div className="form-group">
          <label>Enter the Planter ID</label>
          <input
            name="planterId"
            type="number"
            placeholder="Enter the Planter Id"
            ref={planterIdRef}
            onChange={() => setIdHandler()}
            className="form-control"
            required
          />
        </div>
        <button className="btn btn-primary">Get Planter</button>
      </form>

      {response.planter ? (
        <div>
          <h2>Planter Details</h2>
          <DisplayPlanter planter={response.planter} />
        </div>
      ) : (
        ""
      )}
      {response.errMsg ? (
        <div>
          Request was not successful
          <br />
          {response.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}