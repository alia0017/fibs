/** 
 * Imported Libraries 
 */
import {
    UPDATE_SURVEY,
    CREATE_SURVEY,
    MODIFY_SURVEY
} from '../actions/types'

/** 
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * Redux: Survey Form Reducer to be called by component
 */

/**
 *  Resetting the initial state
 */
const INITIAL_STATE = {
    factorNum: '',
    factor: '',
    quest: '',
    quest2: ''
}

/**
 * Using key interpolation will be determined at run time the prop and value
 */

export default (state = INITIAL_STATE, action) => {
    //console.log(action)
    switch(action.type) {
        case UPDATE_SURVEY:
            return { ...state, [action.payload.prop]: action.payload.value}
        case CREATE_SURVEY:
            return INITIAL_STATE
        case MODIFY_SURVEY:
            return INITIAL_STATE
        default:
            return state
    }
}