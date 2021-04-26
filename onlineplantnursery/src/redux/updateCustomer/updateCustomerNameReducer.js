import updateCustomerNameConstants from "./updateCustomerNameConstants";

const initialState ={
    customer:undefined,
    error: ""};
function updateCustomerNameReducer(state = initialState,action){
if(action.type===updateCustomerNameConstants.fail||action.type===updateCustomerNameConstants.success){
let newState={...state,...action};
return newState;
}
return state;

}
export default updateCustomerNameReducer;