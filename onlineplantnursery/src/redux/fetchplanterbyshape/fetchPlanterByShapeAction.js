import { fetchPlanterByShape } from "../../service/PlanterService";
import store from "../store";
import fetchPlanterByShapeConstants from "./fetchPlanterByShapeConstants";
function fetchPlanterByShapeFail(error) {
  return {
    type: fetchPlanterByShapeConstants.fetchByShapeFail,
    planters: [],
    error: error
  };
}

function fetchPlanterByShapeSuccess(planters) {
  return {
    type: fetchPlanterByShapeConstants.fetchByShapeSuccess,
    planters: planters,
    error: "",
  };
}

function fetchAllPlantersByShape(planterShape){
    return()=>{
        const promise=fetchPlanterByShape(planterShape);
        promise.then((response)=>{
            const planters=response.data;
            store.dispatch(fetchPlanterByShapeSuccess(planters));
        }).catch(error=>{
            store.dispatch(fetchPlanterByShapeFail(error.message));
        })
    }
}
export {fetchAllPlantersByShape,fetchPlanterByShapeSuccess,fetchPlanterByShapeFail};