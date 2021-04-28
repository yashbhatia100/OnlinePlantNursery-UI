import getOrderByIdConstants from "./getOrderByIdConstants"

const initialState={
    Order: undefined,
    error:''
}

function getOrderByIdReducer(state=initialState, action){

    if(action.type === getOrderByIdConstants.success || action.type===getOrderByIdConstants.fail){

        let newState={...state,...action};
        return newState;
    }

    return state;
}

export default getOrderByIdReducer;