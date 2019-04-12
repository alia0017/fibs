/** 
 * Imported Libraries 
 */
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types'

/** 
 * Author: Ahmad Aliabad
 * Last Date Modified: 4/11/2019
 * 
 * Redux: Authentication Reducer to be called by component
 */

/**
 *  Resetting the initial state
 */
const INITIAL_STATE = { 
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
}

/**
 * Overwrites the current object state, by creating a new object
 * (Must produce a new object inorder to change the state)
 */

export default (state = INITIAL_STATE, action) => {
    //console.log(action)
    switch(action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload, }
        case LOGIN_USER:
            return { ...state, loading: true, error: '' }
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload }
        case LOGIN_USER_FAIL:
            return { ...state, loading: false, error: 'Authentication Failed.'}
        default:
            return state
    }
}