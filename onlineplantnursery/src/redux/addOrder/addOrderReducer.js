import addOrderConstants from './addOrderConstants';

const initialState={
    order:undefined,
    error:''
}

function addOrderReducer(state=initialState, action){
    
    if(action.type===addOrderConstants.success || action.type===addOrderConstants.fail){
        let newState={...state,...action};
        return newState;
    }

    return state;
}

export default addOrderReducer;