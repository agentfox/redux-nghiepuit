var initialState = {
    status : false,
    sort : {
        by : "name",
        value : 1
    }
}

var myReducer = (state = initialState,action) => {
    
    if(action.type === 'TOGGLE_STATUS') {
        state.status = !state.status;
    }
    if(action.type === 'CLOSE_MODAL') {
        state.status = action.status;
    }

    if(action.type === 'SORT') {
        let {status} = state;
        let {by,value} = action.sort;
        return {
            status,
            sort : {
                by,
                value
            }
        }
    }
    return state;
    
}

export default myReducer;