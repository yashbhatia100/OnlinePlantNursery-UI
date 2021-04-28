import getAllOrderConstants from "./getAllOrderConstants"

const initialState={
    order: undefined,
    error:''
}

function getAllOrderReducer(state=initialState, action){
    if(action.type === getAllOrderConstants.success || action.type === getAllOrderConstants.fail){
        let newState={...state,...action};
        return newState;
    }
    return state;
}
export default getAllOrderReducer;