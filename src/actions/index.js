import * as types from './ActionTypes';
export const toggleStatus =() =>  {
    return {
        type : types.TOGGLE_STATUS
    }
}
export const sort =() =>  {
    return {
        type : types.SORT,
        sort : {
            by : "name",
            value : -1
        }
    }
}
export const closeModal =() =>  {
    return {
        type : types.CLOSE_MODAL,
        status : false
    }
}