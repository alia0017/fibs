/** 
 * Imported Libraries 
 */
import {
    FETCH_SUCCESS_SURVEY
} from '../actions/types'

/** 
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * Redux: Survey Reducer to be called by component
 */

/**
 *  Resetting the initial state
 */
const INITIAL_STATE = {}

/**
 * Overwritesthe the current object state, by creating a new object
 * (Must produce a new object inorder to change the state)
 */

export default(state = INITIAL_STATE, action) => {
    switch (action.type){
        // console.log(action)
        case FETCH_SUCCESS_SURVEY:
            return action.payload
        default:
            return state
    }
}