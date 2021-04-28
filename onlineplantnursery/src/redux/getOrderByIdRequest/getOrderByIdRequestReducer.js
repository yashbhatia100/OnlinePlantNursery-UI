import getOrderByIdRequestConstants from "./getOrderByIdRequestConstants";

const initialState={
    order:undefined,
    error:''
}
function getOrderByIdRequestReducer(state=initialState, action){
    
    if(action.type === getOrderByIdRequestConstants.success || action.type===getOrderByIdRequestConstants.fail){
        const newState={...state, ...action};
        return newState;
    }
    return state;
}

export default getOrderByIdRequestReducer;